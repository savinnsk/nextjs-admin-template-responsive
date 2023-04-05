import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Header/profile";
import { NotificationNav } from "./Header/notificationNav";
import { SearchBox } from "./Header/searchBox";
import { Logo } from "./Header/logo";
export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
