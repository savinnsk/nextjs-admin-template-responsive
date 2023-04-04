import { Button } from "@chakra-ui/react";

interface PaginationPros {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }: PaginationPros) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="xs"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}
