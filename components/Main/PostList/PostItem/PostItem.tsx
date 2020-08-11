import { ShortPostData } from 'poststore';
import PostBox from './PostBox';
import ThumbnailBox from './ThumbnailBox';
import PostDetail from './PostDetail';
import PostTitle from './PostTitle';
import PostInfoBox from './PostInfoBox';
import PostInfoText from './PostInfoText';
import FontAwsome from 'components/common/FontAwsome';
import { formatDate } from 'components/utils/formatDate';
import Excerpt from './Excerpt';
import PostTagBox from './PostTagBox';
import PostTagItem from './PostTagItem';

interface PostItemProps {
  postData: ShortPostData;
}

const PostItem: React.FC<PostItemProps> = ({
  postData: { title, excerpt, thumbnail, date, categories, tags },
}) => {
  return (
    <PostBox>
      {thumbnail && <ThumbnailBox src={thumbnail} />}
      <PostDetail>
        <PostTitle>{title}</PostTitle>
        <PostInfoBox>
          <PostInfoText>
            <FontAwsome iconName='fas fa-folder' size='small' color='primary' />{' '}
            {categories.slice(-1)}
          </PostInfoText>
          <PostInfoText>
            <FontAwsome
              iconName='fas fa-calendar-alt'
              size='small'
              color='primary'
            />{' '}
            {formatDate(date)}
          </PostInfoText>
        </PostInfoBox>
        <Excerpt>{excerpt}</Excerpt>
        <PostTagBox>
          {tags.map((tag) => (
            <PostTagItem key={tag}>{tag}</PostTagItem>
          ))}
        </PostTagBox>
      </PostDetail>
    </PostBox>
  );
};

export default PostItem;
