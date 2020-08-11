import { styled, css } from 'components/styles/themes/types';

interface FixedContainerProps {
  isFilled: boolean;
}

const FixedContainer = styled.header<FixedContainerProps>`
  width: 100vw;

  position: fixed;
  top: 0;

  z-index: 9999;

  ${({ isFilled }) => isFilled && filledStyle};
`;

const filledStyle = css`
  background-color: ${({ theme }) => theme.colors.filledHeaderBackground};
  box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colors.boxShadowOnBackground};
`;

export default FixedContainer;
