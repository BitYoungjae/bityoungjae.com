import TextBox from 'components/common/TextBox';
import { styled } from 'components/typings/Theme';

export const ValueBox = styled(TextBox)`
  color: ${({ theme }) => theme.colors.blue};
`;
