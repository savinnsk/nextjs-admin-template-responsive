import { Input } from "@/components/Form/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Flex, Stack } from "@chakra-ui/react";

type SignInFormData = {
  email?: string;
  password?: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {};

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email", { required: "email required" })}
          />
          <Input type="password" label="Password" {...register("password")} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Ok
        </Button>
      </Flex>
    </Flex>
  );
}
