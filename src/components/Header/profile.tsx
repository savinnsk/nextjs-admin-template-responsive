import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Administrator</Text>
        <Text color="gray.300" fontSize="small">
          email@email.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Admin"
        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
      />
    </Flex>
  );
}
