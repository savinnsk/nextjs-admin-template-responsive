import { Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  <Stack
    direction="row"
    mt="8"
    justify="space-between"
    align="center"
    spacing="6"
  >
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bgColor: "pink.500",
        cursor: "default",
      }}
    >
      1
    </Button>

    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      1
    </Button>
  </Stack>;
}
