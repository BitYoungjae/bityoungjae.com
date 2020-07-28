import ListItemBox from './ListItemBox';
import TextBox from 'components/common/TextBox';
import { ValueBox } from './ValueBox';

interface PlainListItem {
  name: string;
  content: string;
}

const PlainListItem: React.FC<PlainListItem> = ({ name, content }) => {
  return (
    <ListItemBox>
      <TextBox size='small'>{name}</TextBox>
      <ValueBox size='small'>{content}</ValueBox>
    </ListItemBox>
  );
};

export default PlainListItem;
