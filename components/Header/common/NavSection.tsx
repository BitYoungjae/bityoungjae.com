import { styled } from 'components/typings/Theme';

const NavSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;

  padding: 1rem 0.5rem;

  font-size: ${(props) => props.theme.fontSize.normal};
  color: inherit;
  cursor: pointer;

  position: relative;

  & > i {
    margin-left: 0.3rem;
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export default NavSection;
