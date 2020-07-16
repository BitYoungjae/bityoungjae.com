import React from 'react';
import styled from 'styled-components';

const HeaderInfoBox: React.FC = ({ children }) => {
  return <InfoBox>{children}</InfoBox>;
};

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 97%;

  position: absolute;
  bottom: 0.7rem;

  z-index: 3;
`;

export default HeaderInfoBox;
