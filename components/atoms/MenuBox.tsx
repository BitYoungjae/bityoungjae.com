import React from 'react';
import styled from 'styled-components';
import { IUseBackground, UseBackground } from 'components/styles/helpers';
import { Fixed } from 'components/styles/position';
import { slideAnimation } from 'components/styles/animations';

const MenuBox = styled.div<IUseBackground>`
  ${Fixed.bottom}
  ${slideAnimation.up}

  ${UseBackground}

  width: 100%;
  height: 50vh;

  z-index: 999;
`;

export default React.memo(MenuBox);
