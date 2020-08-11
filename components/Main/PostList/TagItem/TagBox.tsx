import { styled } from 'components/styles/themes/types';

const TagBox = styled.span`
  display: block;
  padding: 0.7rem;

  border-radius: 0.5rem;

  color: white;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default TagBox;
