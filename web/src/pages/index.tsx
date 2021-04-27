import { Flex } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { RecipesDisplay } from "../components/RecipesDisplay";
import { Wrapper } from "../components/Wrapper";

const Index = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <RecipesDisplay />
      </Wrapper>
    </>
  );
};

export default Index;
