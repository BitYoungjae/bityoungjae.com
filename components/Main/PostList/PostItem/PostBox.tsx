import { styled } from 'components/styles/themes/types';

const PostBox = styled.li`
  display: flex;
  background-color: white;
  padding: 1rem;

  overflow: hidden;
  border-radius: 1rem;

  & + & {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 1224px) {
    flex-direction: column;
  }
`;

export default PostBox;
