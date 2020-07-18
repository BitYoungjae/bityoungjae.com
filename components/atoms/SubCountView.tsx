import CountView from './CountView';
import { Colors } from 'components/common/constants';

const SubCountView: React.FC = ({ children }) => (
  <CountView
    textSize='.8rem'
    sizeWidth='1.5rem'
    sizeHeight='1.5rem'
    textColor='white'
    backgroundColor={Colors.Primary}
    fontWeight='bold'
    marginLeft='.5em'
    verticalAlign='middle'>
    {children}
  </CountView>
);

export default SubCountView;
