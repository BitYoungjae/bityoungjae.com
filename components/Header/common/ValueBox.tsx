import TextBox from 'components/common/TextBox';
import { styled } from 'components/typings/Theme';

const ValueBox = styled(TextBox)`
  display: inline-block;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default ValueBox;
