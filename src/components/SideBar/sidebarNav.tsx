import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

export function SideBarNav() {
  return (
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
  );
}
