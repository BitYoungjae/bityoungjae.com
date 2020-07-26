import React from 'react';
import MenuContainer from 'components/atoms/MenuContainer';
import MenuHeading from 'components/atoms/MenuHeading';

interface MenuItemProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, children }) => {
  return (
    <MenuContainer>
      <MenuHeading>{title}</MenuHeading>
      {children}
    </MenuContainer>
  );
};

export default MenuItem;
