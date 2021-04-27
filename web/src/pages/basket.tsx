import { CopyIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import { clearBasket } from "../utils/clearBasket";
import { removeFromBasket } from "../utils/removeFromBasket";

const basket: React.FC = () => {
  const [basket, setBasket] = useState([]);
  const [showClose, setShowClose] = useState(new Map());

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  const formatBasket = (): string => {
    let basketString = "";
    basket.forEach((ingredient) => (basketString += ingredient + "\n"));
    return basketString;
  };

  return (
    <>
      <NavBar />
      <Wrapper>
        {basket.length === 0 ? (
          <Box m="auto" mt={4} fontSize="36px">
            your basket is empty...
          </Box>
        ) : (
          <Stack m="auto" mt={4}>
            <Box fontSize="48px">your basket</Box>
            <List fontSize="18px" w="200px">
              {basket.map((ingredient, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  alignItems="center"
                  height="30px"
                  onMouseEnter={() => {
                    let tmpShowClose = new Map();
                    tmpShowClose[index] = true;
                    setShowClose(tmpShowClose);
                  }}
                  onMouseLeave={() => setShowClose(new Map())}
                >
                  <Box mr="auto">{ingredient}</Box>
                  {showClose[index] ? (
                    <IconButton
                      aria-label="remove ingredient"
                      icon={<SmallCloseIcon color="gray" />}
                      variant="ghost"
                      ml="auto"
                      onClick={() => {
                        let tmpBasket = [];
                        basket.forEach((i) => tmpBasket.push(i));
                        tmpBasket.splice(index, 1);
                        setBasket(tmpBasket);
                        removeFromBasket(ingredient);
                      }}
                    />
                  ) : null}
                </ListItem>
              ))}
            </List>
            <Flex>
              <Button
                colorScheme="blackAlpha"
                onClick={() => {
                  setBasket([]);
                  clearBasket();
                }}
                mr={2}
              >
                clear basket
              </Button>
              <Button
                colorScheme="blackAlpha"
                onClick={() => {
                  const tempInput = document.createElement("textarea");
                  tempInput.value = formatBasket();
                  document.body.appendChild(tempInput);
                  tempInput.select();
                  document.execCommand("copy");
                  document.body.removeChild(tempInput);
                }}
              >
                <CopyIcon mr={1} />
                copy
              </Button>
            </Flex>
          </Stack>
        )}
      </Wrapper>
    </>
  );
};

export default basket;
