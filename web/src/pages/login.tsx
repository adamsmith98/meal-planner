import {
  FormControl,
  Box,
  Button,
  Flex,
  FormErrorMessage,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { formatErrors } from "../utils/formatErrors";

export const login = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <>
      <NavBar />
      <Wrapper>
        <Flex m="auto" alignItems="center">
          <Box>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async (values, { setErrors }) => {
                const response = await login({
                  variables: values,
                  update: (cache, { data }) => {
                    cache.writeQuery<MeQuery>({
                      query: MeDocument,
                      data: {
                        __typename: "Query",
                        me: data?.login.user,
                      },
                    });
                  },
                });
                if (response.data?.login.errors) {
                  setErrors(formatErrors(response.data.login.errors));
                } else if (response.data?.login.user) {
                  router.push("/");
                }
              }}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  <Stack mt={4} alignItems="center">
                    <Field w={400} marginTop={4} name="username">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.username}>
                          <Input
                            {...field}
                            id="username"
                            placeholder="username"
                          />
                          <FormErrorMessage>{errors.username}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field
                      w={400}
                      marginTop={4}
                      name="password"
                      type="password"
                    >
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.password}>
                          <Input
                            {...field}
                            id="password"
                            placeholder="password"
                            type="password"
                          />
                          <FormErrorMessage>{errors.password}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      colorScheme="blackAlpha"
                      w={150}
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      login
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
};

export default login;
