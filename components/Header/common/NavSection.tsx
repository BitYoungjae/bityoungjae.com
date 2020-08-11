import { styled } from 'components/styles/themes/types';

interface NavSectionProps {
  isFilled?: boolean;
}

const NavSection = styled.section<NavSectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;

  padding: 1rem 0.5rem;

  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.textOnFilledHeader : theme.colors.textOnBackground};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: bold;
  cursor: pointer;

  position: relative;

  & > i {
    margin-left: 0.3rem;
  }
`;

export default NavSection;
