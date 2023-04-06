import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./paginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
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
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
      </Stack>
    </Stack>
  );
}
