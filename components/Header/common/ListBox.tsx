import { styled } from 'components/styles/themes/types';

const ListBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  & + & {
    margin-top: 0.8rem;
  }
`;

export default ListBox;
