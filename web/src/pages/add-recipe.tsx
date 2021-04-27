import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import {
  GqlCookingTime,
  GqlPrice,
  useCreateRecipeMutation,
} from "../generated/graphql";

const addRecipe: React.FC = () => {
  const [createRecipe, { error }] = useCreateRecipeMutation();
  const router = useRouter();

  return (
    <>
      <NavBar />
      <Wrapper>
        {error?.message === "not authorized" ? (
          <Box m="auto" mt={4}>
            you must be logged in to add a recipe
          </Box>
        ) : (
          <Flex m="auto">
            <Formik
              initialValues={{
                name: "",
                ingredients: [""],
                cuisine: "",
                cookingTime: GqlCookingTime.Fast,
                price: GqlPrice.Low,
              }}
              onSubmit={async (values) => {
                try {
                  await createRecipe({
                    variables: {
                      ...values,
                      ingredients: values.ingredients.filter((i) => i !== ""),
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
                                onClick={() =>
                                  arrayHelpers.insert(index + 1, "")
                                }
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
                          <Input
                            {...field}
                            id="cuisine"
                            placeholder="cuisine"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field w={400} marginTop={4} name="cookingTime">
                      {({ field }) => (
                        <FormControl>
                          <Select {...field}>
                            <option value={GqlCookingTime.Fast}>Fast</option>
                            <option value={GqlCookingTime.Medium}>
                              Medium
                            </option>
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
                      add recipe
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Flex>
        )}
      </Wrapper>
    </>
  );
};

export default addRecipe;
