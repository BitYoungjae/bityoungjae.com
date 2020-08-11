import React from 'react';
import ListBox from './ListBox';
import TextBox from 'components/common/TextBox';
import ValueBox from './ValueBox';

interface SubNavItemProps {
  name: string;
  content: string;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ name, content }) => {
  return (
    <ListBox>
      <TextBox size='normal'>{name}</TextBox>
      <ValueBox size='normal'>{content}</ValueBox>
    </ListBox>
  );
};

export default React.memo(SubNavItem);
