import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavSection } from "./SideBar/navSection";
import { NavLink } from "./SideBar/navLink";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="General">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Users</NavLink>
        </NavSection>

        <NavSection title=" Automatization">
          <NavLink icon={RiInputMethodLine}>Graph</NavLink>
          <NavLink icon={RiGitMergeLine}>Automatization</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
