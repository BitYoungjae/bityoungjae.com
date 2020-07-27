import styled from 'styled-components';

const ListItemBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  & + & {
    margin-top: 0.8rem;
  }
`;

export default ListItemBox;
