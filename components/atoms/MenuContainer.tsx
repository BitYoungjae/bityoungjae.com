import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: 0.8rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.3);

  & + & {
    margin-top: 1rem;
  }
`;

export default MenuContainer;
