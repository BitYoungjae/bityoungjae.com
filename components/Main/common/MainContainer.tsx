import React from 'react';
import { styled } from 'components/styles/themes/types';

const MainContainer = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  @media screen and (max-width: 1224px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

export default MainContainer;
