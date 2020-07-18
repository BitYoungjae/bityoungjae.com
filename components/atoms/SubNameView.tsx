import { SpanWithFontStyle } from 'components/styles/alias';

const SubNameView: React.FC = ({ children }) => (
  <SpanWithFontStyle
    textColor='black'
    textSize='1.1rem'
    letterSpacing='.05em'
    verticalAlign='middle'>
    {children}
  </SpanWithFontStyle>
);

export default SubNameView;
