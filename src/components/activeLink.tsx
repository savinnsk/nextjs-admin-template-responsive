import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinksProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: false;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...props
}: ActiveLinksProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if ((shouldMatchExactHref && asPath === props.href) || asPath === props.as) {
    isActive = true;
  }

  if (
    (!shouldMatchExactHref && asPath.startsWith(String(props.href))) ||
    asPath.startsWith(String(props.as))
  ) {
    isActive = true;
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
