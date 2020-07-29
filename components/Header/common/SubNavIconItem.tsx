import ListBox from './ListBox';
import FontAwsome from 'components/common/FontAwsome';
import TextBox from 'components/common/TextBox';
import { styled } from 'components/typings/Theme';
import { GetProps } from 'components/typings/GetProps';
import ValueBox from './ValueBox';

interface SubNavIconItemProps extends GetProps<typeof FontAwsome> {
  name: string;
  content: string;
}

const SubNavIconItem: React.FC<SubNavIconItemProps> = ({
  iconName,
  name,
  content,
  color,
}) => {
  return (
    <ListBox>
      <span>
        <FontAwsome iconName={iconName} size='small' color={color} />
        <NameBox size='small'>{name}</NameBox>
      </span>
      <ValueBox size='small'>{content}</ValueBox>
    </ListBox>
  );
};

const NameBox = styled(TextBox)`
  display: inline-block;
  margin-left: 0.3rem;
`;

export default SubNavIconItem;
