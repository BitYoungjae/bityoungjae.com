import React from 'react';
import styled from 'styled-components';
import {
  IUseFont,
  IUseSize,
  UseFont,
  UseSize,
} from 'components/styles/helpers';
import { Flex } from 'components/styles/flex';
import { Fixed } from 'components/styles/position';

const MenuButton = styled.button<IUseFont & IUseSize>`
  ${Flex.center};
  ${Fixed.center};

  ${UseFont}
  ${UseSize}

  background-color: rgba(0, 0, 0, 0.5);

  border-radius: 50%;
  border: none;

  z-index: 9999;
`;

export default React.memo(MenuButton);
