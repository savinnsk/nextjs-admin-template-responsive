import { Box, Button, Stack, Text } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box fontSize="15">
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Text>page</Text>
        <Button
          size="xs"
          fontSize="xs"
          width="2"
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
          size="xs"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{ bg: "gray.500" }}
        >
          1
        </Button>
      </Stack>
    </Stack>
  );
}
