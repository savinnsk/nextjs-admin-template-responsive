import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./profile";
import { NotificationNav } from "./notificationNav";
import { SearchBox } from "./searchBox";
import { Logo } from "./logo";
import { useSidebarDrawer } from "@/contexts/sidebarContext";
import { RiMenuLine } from "react-icons/ri";
export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      {!isWideVersion && (
        <IconButton
          mr="2"
          bg="gray.800"
          aria-label="Open navigation"
          icon={
            <Icon
              color="white"
              as={RiMenuLine}
              fontSize="24"
              onClick={onOpen}
            ></Icon>
          }
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
