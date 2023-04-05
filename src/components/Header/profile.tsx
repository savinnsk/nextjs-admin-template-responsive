import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Administrator</Text>
          <Text color="gray.300" fontSize="small">
            email@email.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Admin"
        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
      />
    </Flex>
  );
}
