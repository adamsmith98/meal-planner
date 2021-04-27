import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  List,
  ListItem,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { GiCookingPot } from "react-icons/gi";
import { BiTimer, BiWorld } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GqlCookingTime, GqlPrice, Recipe } from "../generated/graphql";
import { convertPrice } from "../utils/convertPrice";
import { calculateCookingTimeBadgeColor } from "../utils/calculateCookingTimeBadgeColor";
import { calculatePriceBadgeColor } from "../utils/calculatePriceBadgeColor";

interface SideBarProps {
  recipes: Recipe[];
  handleSelectRecipe: (id: number) => void;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SideBar: React.FC<SideBarProps> = ({
  recipes,
  handleSelectRecipe,
  handleSearchChange,
}) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <Stack spacing={0} w={400} borderRight="1px" borderColor="gray.200">
      <InputGroup
        zIndex={1}
        position="fixed"
        w={400}
        borderRight="1px"
        borderColor="gray.200"
      >
        <InputLeftElement children={<SearchIcon />} />
        <Input
          onChange={handleSearchChange}
          bgColor="white"
          variant="flushed"
          focusBorderColor="black"
          placeholder="search..."
        />
      </InputGroup>
      <Stack pt="40px" spacing={0} divider={<StackDivider color="gray.200" />}>
        {recipes.map((r) => (
          <Stack
            as="button"
            border="1px"
            borderColor={selectedRecipeId === r.id ? "gray.500" : "transparent"}
            bgColor={selectedRecipeId === r.id ? "gray.100" : null}
            key={r.id}
            p={4}
            pl={10}
            outline="none"
            _hover={{
              borderColor: "gray.500",
            }}
            _focus={{
              borderColor: "gray.500",
            }}
            onClick={() => {
              handleSelectRecipe(r.id);
              setSelectedRecipeId(r.id);
            }}
          >
            <Flex alignItems="center">
              <Box mr={2}>
                <GiCookingPot />
              </Box>
              {r.name}
            </Flex>
            <Flex alignItems="center">
              <Box mr={2}>
                <BiWorld />
              </Box>
              <Badge>{r.cuisine}</Badge>
            </Flex>
            <Flex alignItems="center">
              <Box mr={2}>
                <BiTimer />
              </Box>
              <Badge
                colorScheme={calculateCookingTimeBadgeColor(
                  GqlCookingTime[r.cookingTime]
                )}
              >
                {r.cookingTime}
              </Badge>
            </Flex>
            <Flex alignItems="center">
              <Box mr={2}>
                <FaRegMoneyBillAlt />
              </Box>
              <Badge
                colorScheme={calculatePriceBadgeColor(convertPrice(r.price))}
              >
                {r.price}
              </Badge>
            </Flex>
          </Stack>
        ))}
      </Stack>
      <NextLink href="/add-recipe">
        <Link position="fixed" bottom={0} w={400} as={Button}>
          <AddIcon mr={2} />
          add recipe
        </Link>
      </NextLink>
    </Stack>
  );
};
