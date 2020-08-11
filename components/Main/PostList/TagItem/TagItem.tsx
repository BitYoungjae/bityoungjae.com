import { PropInfo } from 'poststore';
import TagBox from './TagBox';
import TagWrapper from './TagWrapper';

interface TagItemProps {
  tagData: PropInfo;
}

const TagItem: React.FC<TagItemProps> = ({ tagData }) => {
  return (
    <TagWrapper>
      <TagBox>{tagData.name}</TagBox>
    </TagWrapper>
  );
};

export default TagItem;
