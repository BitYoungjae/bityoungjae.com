import { SpanWithFontStyle } from 'components/styles/alias';

const RootNameView: React.FC = ({ children }) => (
  <SpanWithFontStyle
    textColor='white'
    textSize='1.2rem'
    letterSpacing='.1em'
    verticalAlign='middle'>
    {children}
  </SpanWithFontStyle>
);

export default RootNameView;
