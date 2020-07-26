import React from 'react';
import styled, { css } from 'styled-components';
import { slideAnimation } from 'components/styles/animations';
import { Colors } from 'components/common/constants';

interface MenuBoxProps {
  isMobile: boolean;
}

const MenuBox = styled.div<MenuBoxProps>`
  background-color: ${Colors.Primary};
  padding: 0.5rem;

  ${({ isMobile }) => isMobile && mobileStyle}

  overflow-y: auto;
`;

const mobileStyle = css`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  ${slideAnimation.up}

  z-index: 999;
`;

export default React.memo(MenuBox);
