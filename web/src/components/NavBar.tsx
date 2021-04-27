import { useApolloClient } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { clearBasket } from "../utils/clearBasket";
import { FiShoppingBag } from "react-icons/fi";

export const NavBar: React.FC = () => {
  const { data } = useMeQuery();
  const [logout] = useLogoutMutation();
  const client = useApolloClient();
  const router = useRouter();

  return (
    <Flex
      position="fixed"
      w="100%"
      zIndex={1}
      height="80px"
      bgColor="black"
      alignItems="center"
    >
      <Flex w="950px" m="auto">
        <Box mr="auto" pl={4} fontSize="18pt" textColor="white">
          <NextLink href="/">
            <Link>MealPlanner</Link>
          </NextLink>
        </Box>
        {data?.me ? (
          <Flex ml="auto" alignItems="center">
            <Box mr={4} textColor="white">
              {data.me.username}
            </Box>
            <Button
              mr={4}
              variant="link"
              textColor="white"
              fontWeight={1}
              onClick={async () => {
                try {
                  await logout();
                  clearBasket();
                  await client.resetStore();
                  await router.push("/");
                } catch (err) {
                  // not auth error (handled in SideBar)
                }
              }}
            >
              logout
            </Button>
            <NextLink href="/basket">
              <Button>
                <FiShoppingBag />
                <Box pl={1}>basket</Box>
              </Button>
            </NextLink>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <NextLink href="/login">
              <Link mr={4} textColor="white">
                login
              </Link>
            </NextLink>
            <NextLink href="/register">
              <Link textColor="white">register</Link>
            </NextLink>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
