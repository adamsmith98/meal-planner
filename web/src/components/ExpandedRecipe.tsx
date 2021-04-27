import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GiChefToque } from "react-icons/gi";
import {
  GqlCookingTime,
  Recipe,
  useDeleteRecipeMutation,
} from "../generated/graphql";
import { addToBasket } from "../utils/addToBasket";
import { calculateCookingTimeBadgeColor } from "../utils/calculateCookingTimeBadgeColor";
import { calculatePriceBadgeColor } from "../utils/calculatePriceBadgeColor";
import { convertPrice } from "../utils/convertPrice";

interface ExpandedRecipeProps {
  recipe: Recipe;
  resetFn: () => void;
}

export const ExpandedRecipe: React.FC<ExpandedRecipeProps> = ({
  recipe,
  resetFn,
}) => {
  const [deleteRecipe] = useDeleteRecipeMutation();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  if (!recipe) {
    return null;
  }

  return (
    <>
      <Flex position="fixed" ml="400px" w="800px">
        <Box p={20}>
          <Box fontSize="48px" pb={4}>
            {recipe.name}
          </Box>
          <Box fontStyle="italic">Ingredients</Box>
          <List pb={4} pl={10}>
            {recipe.ingredients.map((i) => (
              <ListItem key={i}>{i}</ListItem>
            ))}
          </List>
          <Flex pb={4} alignItems="center">
            <Box fontStyle="italic">Cuisine:</Box>
            <Badge ml={2}>{recipe.cuisine}</Badge>
          </Flex>
          <Flex pb={4} alignItems="center">
            <Box fontStyle="italic">Cooking time:</Box>
            <Badge
              ml={2}
              colorScheme={calculateCookingTimeBadgeColor(
                GqlCookingTime[recipe.cookingTime]
              )}
            >
              {recipe.cookingTime}
            </Badge>
          </Flex>
          <Flex pb={4} alignItems="center">
            <Box fontStyle="italic">Price:</Box>
            <Badge
              ml={2}
              colorScheme={calculatePriceBadgeColor(convertPrice(recipe.price))}
            >
              {recipe.price}
            </Badge>
          </Flex>
        </Box>
        <Box ml="auto" pt={20}>
          <NextLink href={`/edit/${recipe.id}`}>
            <IconButton
              colorScheme="blackAlpha"
              aria-label="edit recipe"
              icon={<EditIcon />}
              mr={4}
            />
          </NextLink>
          <IconButton
            colorScheme="blackAlpha"
            aria-label="delete recipe"
            icon={<DeleteIcon />}
            mr={4}
            onClick={async () => setIsOpen(true)}
          />
          <IconButton
            colorScheme="blackAlpha"
            aria-label="add to basket"
            icon={<FiShoppingBag />}
            onClick={() => {
              addToBasket(recipe.ingredients);
              toast({
                title: "added to basket!",
                description: "we've added the ingredients to your basket",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          />
        </Box>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              delete recipe
            </AlertDialogHeader>

            <AlertDialogBody>
              are you sure? you can't undo this action afterwards
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  await deleteRecipe({
                    variables: { id: recipe.id },
                    update: (cache) => {
                      cache.evict({ id: cache.identify(recipe) });
                      cache.gc();
                      resetFn();
                    },
                  });
                  onClose();
                }}
                ml={3}
              >
                delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
