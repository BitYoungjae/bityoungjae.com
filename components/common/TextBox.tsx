import { styled } from 'components/styles/themes/types';
import { FontSize } from 'components/styles/themes/types';

interface TextBoxProps {
  size?: FontSize;
}

const TextBox = styled.span<TextBoxProps>`
  font-size: ${({ theme, size }) => theme.fontSize[size ?? 'normal']};
`;

export default TextBox;
