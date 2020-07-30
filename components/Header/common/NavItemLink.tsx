import React from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import { GetProps } from 'components/typings/GetProps';
import { styled } from 'components/typings/Theme';
import { PlainAnchor } from 'components/styles/alias';

interface NavItemLinkProps extends GetProps<typeof NavItem> {
  href: string;
  as?: string;
}

const NavItemLink: React.FC<NavItemLinkProps> = ({
  hasDropdown,
  as,
  href,
  children,
}) => {
  return (
    <Link href={href} as={as}>
      <StyledNavItemLink>
        <NavItem hasDropdown={hasDropdown}>{children}</NavItem>
      </StyledNavItemLink>
    </Link>
  );
};

const StyledNavItemLink = styled(PlainAnchor)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default React.memo(NavItemLink);
