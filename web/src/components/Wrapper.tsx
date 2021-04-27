import { Flex } from "@chakra-ui/layout";
import React from "react";

export const Wrapper: React.FC = ({ children }) => {
  return <Flex pt="80px">{children}</Flex>;
};
