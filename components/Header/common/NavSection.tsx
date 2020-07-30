import { styled } from 'components/typings/Theme';

const NavSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;

  padding: 1rem 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.textOnBackground ?? 'black'};
  cursor: pointer;

  position: relative;

  & > i {
    margin-left: 0.3rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default NavSection;
