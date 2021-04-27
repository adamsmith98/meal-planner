import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecipesQuery } from "../generated/graphql";
import { ExpandedRecipe } from "./ExpandedRecipe";
import { SideBar } from "./SideBar";

export const RecipesDisplay: React.FC = () => {
  const { loading, error, data } = useRecipesQuery();
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  if (data && !filteredRecipes) {
    setFilteredRecipes(data.recipes);
  }

  const resetFilteredRecipes = () => {
    console.log(data.recipes);
    setFilteredRecipes(data.recipes);
  };

  const selectRecipe = (id: number) => {
    setCurrentRecipe(data.recipes.find((r) => r.id === id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredRecipes(
      data.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  if (error) {
    if (error.message === "not authorized") {
      return (
        <Flex m="auto">
          <Box mt={60} fontWeight="bold" fontSize="24pt">
            login to see your recipes
          </Box>
        </Flex>
      );
    }
    return <Box>error: {error.message}</Box>;
  }
  if (loading) return <Box>loading...</Box>;

  return (
    <Flex>
      <SideBar
        recipes={filteredRecipes as any}
        handleSelectRecipe={selectRecipe}
        handleSearchChange={handleSearchChange}
      />
      {data.recipes.includes(currentRecipe) ? (
        <ExpandedRecipe recipe={currentRecipe} resetFn={resetFilteredRecipes} />
      ) : null}
    </Flex>
  );
};
