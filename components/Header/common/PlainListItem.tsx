import ListItemBox from './ListItemBox';
import TextBox from 'components/common/TextBox';

interface PlainListItem {
  name: string;
  content: string;
}

const PlainListItem: React.FC<PlainListItem> = ({ name, content }) => {
  return (
    <ListItemBox>
      <TextBox size='small'>{name}</TextBox>
      <TextBox size='small'>{content}</TextBox>
    </ListItemBox>
  );
};

export default PlainListItem;
