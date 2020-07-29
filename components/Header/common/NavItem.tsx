import React from 'react';
import FontAwsome from '../../common/FontAwsome';
import NavSection from './NavSection';
import { GetDOMAttributeFromStyledComponent } from 'components/typings/SCHelper';

interface NavItemProps
  extends GetDOMAttributeFromStyledComponent<typeof NavSection> {
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  hasDropdown = true,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <NavSection onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {hasDropdown && <FontAwsome iconName='fas fa-angle-down' />}
    </NavSection>
  );
};

export default NavItem;
