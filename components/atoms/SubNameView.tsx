import { SpanWithFontStyle } from 'components/styles/alias';
import { ItemViewProps } from './TreeItem';

const SubNameView: React.FC<ItemViewProps> = ({ children, isActive }) => (
  <SpanWithFontStyle
    textColor='black'
    textSize='1.1rem'
    textWeight={isActive ? 'bold' : undefined}
    charSpacing='.05em'
    verticalAlign='middle'>
    {children}
  </SpanWithFontStyle>
);

export default SubNameView;
