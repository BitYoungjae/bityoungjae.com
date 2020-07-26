import React from 'react';
import styled from 'styled-components';
import { Flex } from 'components/styles/flex';
import FontAwsome from './FontAwsome';
import { IconNames } from 'components/common/constants';

interface MenuButtonProps {
  isOpen: boolean;
  onToggleMenu: () => void;
}
// textSize={isOpen ? '2.3rem' : '2rem'}
// sizeWidth='5rem'
// sizeHeight='5rem'

const MenuButtonStyle = styled.button<{ isOpen: boolean }>`
  position: fixed;
  bottom: 5vh;
  right: 5vw;

  ${Flex.center};

  font-size: ${({ isOpen }) => (isOpen ? '2.3rem' : '2rem')};
  width: 5rem;
  height: 5rem;

  background-color: rgba(0, 0, 0, 0.5);

  border-radius: 50%;
  border: none;

  z-index: 9999;
`;

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onToggleMenu }) => {
  return (
    <MenuButtonStyle isOpen={isOpen} onClick={onToggleMenu}>
      <FontAwsome
        iconName={isOpen ? IconNames.close : IconNames.bars}
        textColor='white'
      />
    </MenuButtonStyle>
  );
};

export default React.memo(MenuButton);
