import { SpanWithFontStyle } from 'components/styles/alias';
import { ItemViewProps } from './TreeItem';

const RootNameView: React.FC<ItemViewProps> = ({ children, isActive }) => (
  <SpanWithFontStyle
    textColor='white'
    textSize='1.2rem'
    charSpacing='.1em'
    verticalAlign='middle'
    textWeight={isActive ? 'bold' : undefined}>
    {children}
  </SpanWithFontStyle>
);

export default RootNameView;
