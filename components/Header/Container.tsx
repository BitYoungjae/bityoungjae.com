import React from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'filled';
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ type, children }) => {
  return <StyledContainer type={type}>{children}</StyledContainer>;
};

interface ContainerProps extends Pick<ContainerProps, 'type'> {}

const StyledContainer = styled.header<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  width: 100vw;

  background-color: white;
  box-shadow: 0 0.1rem 0.25rem rgba(203, 203, 203, 0.5);

  transition: background-color 0.3s;

  ${({ type }) => type === 'filled' && filledStyle};
`;

const filledStyle = css`
  background-color: ${(props) => props.theme.primary};
`;

export default Container;
