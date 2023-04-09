import { Input } from "@/components/Form/input";
import { Header } from "@/components/Header/header";
import { Sidebar } from "@/components/SideBar/sidebar";

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(7).required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "should match with password"),
});

export default function CreateUSer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData | any> = (
    values,
    event
  ) => {};

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>

          <Divider mt="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="text"
                label="full name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                type="email"
                label="email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="password" />
              <Input
                type="password"
                label=" Password Confirmation"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users/list" passHref>
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                isLoading={formState.isSubmitting}
                type="submit"
                colorScheme="pink"
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
