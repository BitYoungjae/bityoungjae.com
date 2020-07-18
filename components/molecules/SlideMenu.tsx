import React from 'react';
import styled, { css } from 'styled-components';
import FontAwsome from 'components/atoms/FontAwsome';
import { IUseFont, UseFont } from 'components/styles/helpers';
import { Flex } from 'components/styles/flex';
import { Fixed } from 'components/styles/position';

const SlideMenu: React.FC = () => {
  return (
    <MenuButton fontSize='2rem'>
      <FontAwsome iconName='fas fa-bars' color='white' />
    </MenuButton>
  );
};

interface MenuButtonProps extends IUseFont {}

const MenuButton = styled.button<MenuButtonProps>`
  ${Flex.center};
  ${Fixed.center};

  ${UseFont}

  padding: 0.9em;
  background-color: rgba(0, 0, 0, 0.5);

  border-radius: 50%;
  border: none;

  ${({ fontSize = '1rem' }) =>
    css`
      font-size: ${fontSize};
    `}
`;

export default SlideMenu;
