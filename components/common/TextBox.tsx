import styled from 'styled-components';
import { FontSize } from 'components/typings/Theme';

interface TextBoxProps {
  size: FontSize;
}

const TextBox = styled.span<TextBoxProps>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
`;

export default TextBox;
