import {
  Box,
  Flex,
  Stack,
  FormControl,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { Wrapper } from "../../components/Wrapper";
import {
  useCreateRecipeMutation,
  GqlCookingTime,
  GqlPrice,
  useUpdateRecipeMutation,
  useMeQuery,
  useRecipeQuery,
} from "../../generated/graphql";
import { convertPrice } from "../../utils/convertPrice";

const editRecipe: React.FC = () => {
  const router = useRouter();
  const { data: userData } = useMeQuery();
  const [updateRecipe] = useUpdateRecipeMutation();
  const { data, loading } = useRecipeQuery({
    variables: { id: parseInt(router.query.id as string) },
  });

  if (loading || !data?.recipe) {
    return (
      <>
        <NavBar />
        <Wrapper>
          <Box>loading...</Box>
        </Wrapper>
      </>
    );
  }

  if (!userData?.me) {
    return (
      <>
        <NavBar />
        <Wrapper>
          <Box m="auto" mt={4}>
            you must be logged in to edit a recipe
          </Box>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Wrapper>
        <Flex m="auto">
          <Formik
            initialValues={{
              name: data.recipe.name,
              ingredients: data.recipe.ingredients,
              cuisine: data.recipe.cuisine,
              cookingTime: GqlCookingTime[data.recipe.cookingTime],
              price: convertPrice(data.recipe.price),
            }}
            onSubmit={async (values) => {
              try {
                await updateRecipe({
                  variables: {
                    id: data.recipe.id,
                    updateRecipeInput: values,
                  },
                });
                await router.push("/");
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <Stack mt={4}>
                  <Field w={400} marginTop={4} name="name">
                    {({ field }) => (
                      <FormControl>
                        <Input {...field} id="name" placeholder="name" />
                      </FormControl>
                    )}
                  </Field>
                  <FieldArray
                    name="ingredients"
                    render={(arrayHelpers) => (
                      <Box>
                        {values.ingredients.map((_, index) => (
                          <Box key={index}>
                            <Field name={`ingredients[${index}]`}>
                              {({ field }) => (
                                <FormControl>
                                  <Input
                                    {...field}
                                    id={`ingredients[${index}]`}
                                    placeholder="ingredient"
                                  />
                                </FormControl>
                              )}
                            </Field>
                            {values.ingredients.length > 1 ? (
                              <Button
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </Button>
                            ) : null}
                            <Button
                              onClick={() => arrayHelpers.insert(index + 1, "")}
                            >
                              +
                            </Button>
                          </Box>
                        ))}
                      </Box>
                    )}
                  />
                  <Field w={400} marginTop={4} name="cuisine">
                    {({ field }) => (
                      <FormControl>
                        <Input {...field} id="cuisine" placeholder="cuisine" />
                      </FormControl>
                    )}
                  </Field>
                  <Field w={400} marginTop={4} name="cookingTime">
                    {({ field }) => (
                      <FormControl>
                        <Select {...field}>
                          <option value={GqlCookingTime.Fast}>Fast</option>
                          <option value={GqlCookingTime.Medium}>Medium</option>
                          <option value={GqlCookingTime.Slow}>Slow</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field w={400} marginTop={4} name="price">
                    {({ field }) => (
                      <FormControl>
                        <Select {...field}>
                          <option value={GqlPrice.Low}>£</option>
                          <option value={GqlPrice.Medium}>££</option>
                          <option value={GqlPrice.High}>£££</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    colorScheme="blackAlpha"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    update recipe
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Flex>
      </Wrapper>
    </>
  );
};

export default editRecipe;
