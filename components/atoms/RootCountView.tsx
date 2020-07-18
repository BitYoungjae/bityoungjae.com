import CountView from './CountView';
import { ItemViewProps } from './TreeItem';
import FontAwsome from './FontAwsome';
import styled from 'styled-components';

const RootCountView: React.FC<ItemViewProps> = ({ children, isActive }) => (
  <CountView
    textSize='.8rem'
    sizeWidth='1.5rem'
    sizeHeight='1.5rem'
    textColor='rgba(0, 0, 0, .7)'
    textWeight='bold'
    marginLeft='.5em'
    marginRight='.8em'
    verticalAlign='middle'>
    {children}
  </CountView>
);

export default RootCountView;
