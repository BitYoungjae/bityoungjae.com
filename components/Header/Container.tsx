import React from 'react';
import { styled, css } from 'components/typings/Theme';

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
  justify-content: space-between;
  align-items: center;

  position: fixed;

  width: 100vw;
  padding: 0 20vw;

  color: ${({ theme }) => theme.colors.black};

  background-color: transparent;
  transition: background-color 0.3s;

  ${({ type }) => type === 'filled' && filledStyle};
`;

const filledStyle = css`
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.filledHeader};
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.3);
`;

export default Container;
