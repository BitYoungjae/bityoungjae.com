import { styled } from 'components/styles/themes/types';

const PostTagItem = styled.li`
  padding: 0.4rem 0.6rem;
  color: white;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  & + & {
    margin-left: 0.5rem;
  }
`;

export default PostTagItem;
