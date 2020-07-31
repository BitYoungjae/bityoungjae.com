import { styled, css } from 'components/typings/Theme';

interface HeaderContainerProps {
  isFilled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 3.7rem;
  padding: 0 20vw;
  position: fixed;

  z-index: 9999;

  color: ${({ theme }) => theme.colors.textOnBackground};
  background-color: transparent;
  transition: background-color 0.3s;

  ${({ isFilled = false }) => isFilled && filledHeader};
`;

const filledHeader = css`
  color: ${({ theme }) => theme.colors.textOnFilledHeader};
  background-color: ${({ theme }) => theme.colors.filledHeaderBackground};
  box-shadow: 0 0.1rem 1rem ${({ theme }) => theme.colors.boxShadowOnBackground};
`;

export default HeaderContainer;
