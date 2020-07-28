import React from 'react';
import FontAwsome from '../../common/FontAwsome';
import { GetProps } from 'components/typings/GetProps';
import { styled } from 'components/typings/Theme';

interface NavItemProps extends GetProps<typeof NavButton> {
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  hasDropdown = true,
  ...buttonProps
}) => {
  return (
    <NavButton {...buttonProps}>
      {children}
      {hasDropdown && <FontAwsome iconName='fas fa-angle-down' />}
    </NavButton>
  );
};

const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;

  padding: 1rem 0.5rem;

  font-size: ${(props) => props.theme.fontSize.normal};
  color: ${(props) => props.theme.colors.lightGray};
  cursor: pointer;

  position: relative;

  & > i {
    margin-left: 0.3rem;
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export default NavItem;
