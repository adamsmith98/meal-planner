import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from "@chakra-ui/react";
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
          <Box>
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
                  <Stack marginTop={4} alignItems="center">
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
                      register
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

export default register;
