import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { formatErrors } from "../utils/formatErrors";

export const register = () => {
  const [register] = useRegisterMutation();
  const router = useRouter();

  return (
    <>
      <NavBar />
      <Wrapper>
        <Flex m="auto" alignItems="center">
          <Stack mt="20px">
            <Box fontSize="24px" textAlign="center">
              Create account
            </Box>
            <Box borderWidth="1px" borderColor="gray.400" borderRadius="lg">
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await register({
                    variables: values,
                    update: (cache, { data }) => {
                      cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: "Query",
                          me: data?.register.user,
                        },
                      });
                    },
                  });
                  if (response.data?.register.errors) {
                    setErrors(formatErrors(response.data.register.errors));
                  } else if (response.data?.register.user) {
                    router.push("/");
                  }
                }}
              >
                {({ isSubmitting, errors }) => (
                  <Form>
                    <Stack
                      pl="30px"
                      pr="30px"
                      pt="25px"
                      pb="25px"
                      alignItems="center"
                      bgColor="gray.100"
                    >
                      <Box>
                        <Text fontSize="14px" mr="auto">
                          Username
                        </Text>
                        <Field w={400} name="username">
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.username}>
                              <Input
                                {...field}
                                id="username"
                                fontSize="14px"
                                height="35px"
                                pl="10px"
                                w="250px"
                                bgColor="white"
                                borderColor="gray.400"
                              />
                              <Box maxW="250px">
                                <FormErrorMessage>
                                  {errors.username}
                                </FormErrorMessage>
                              </Box>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                      <Box pt="10px">
                        <Text fontSize="14px" mr="auto">
                          Password
                        </Text>
                        <Field w={400} name="password" type="password">
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.password}>
                              <Input
                                {...field}
                                id="password"
                                type="password"
                                fontSize="14px"
                                height="35px"
                                pl="10px"
                                w="250px"
                                bgColor="white"
                                borderColor="gray.400"
                              />
                              <Box maxW="250px">
                                <FormErrorMessage>
                                  {errors.password}
                                </FormErrorMessage>
                              </Box>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                      <Box pt="20px">
                        <Button
                          colorScheme="orange"
                          w="250px"
                          height="35px"
                          type="submit"
                          fontSize="14px"
                          isLoading={isSubmitting}
                        >
                          Register
                        </Button>
                      </Box>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </Box>
            <Box>
              Already signed up?{" "}
              <NextLink href="/login">
                <Link color="orange.600">Login</Link>
              </NextLink>
            </Box>
          </Stack>
        </Flex>
      </Wrapper>
    </>
  );
};

export default register;
