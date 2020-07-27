import { GetProps } from 'components/typings/GetProps';
import FontAwsome from 'components/common/FontAwsome';
import styled from 'styled-components';
import ListItemBox from './ListItemBox';
import TextBox from 'components/common/TextBox';

interface ListItemProps extends GetProps<typeof FontAwsome> {
  name: string;
  content: string;
}

const ListItem: React.FC<ListItemProps> = ({ iconName, name, content }) => {
  return (
    <ListItemBox>
      <span>
        <FontAwsome iconName={iconName} size='small' />
        <NameBox size='small'>{name}</NameBox>
      </span>
      <TextBox size='small'>{content}</TextBox>
    </ListItemBox>
  );
};

const NameBox = styled(TextBox)`
  display: inline-block;
  margin-left: 0.3rem;
`;

export default ListItem;
