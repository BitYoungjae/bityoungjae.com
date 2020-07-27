import React from 'react';
import styled from 'styled-components';

const OutLinkContainer: React.FC = ({ children }) => {
  return <NavContainer>{children}</NavContainer>;
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default OutLinkContainer;
