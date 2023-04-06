import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  // element type name of the component
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
