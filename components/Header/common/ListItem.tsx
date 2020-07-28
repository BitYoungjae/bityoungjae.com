import { GetProps } from 'components/typings/GetProps';
import FontAwsome from 'components/common/FontAwsome';
import { styled } from 'components/typings/Theme';
import ListItemBox from './ListItemBox';
import TextBox from 'components/common/TextBox';
import { ValueBox } from './ValueBox';

interface ListItemProps extends GetProps<typeof FontAwsome> {
  name: string;
  content: string;
}

const ListItem: React.FC<ListItemProps> = ({
  iconName,
  name,
  content,
  color,
}) => {
  return (
    <ListItemBox>
      <span>
        <FontAwsome iconName={iconName} size='small' color={color} />
        <NameBox size='small'>{name}</NameBox>
      </span>
      <ValueBox size='small'>{content}</ValueBox>
    </ListItemBox>
  );
};

const NameBox = styled(TextBox)`
  display: inline-block;
  margin-left: 0.3rem;
`;

export default ListItem;
