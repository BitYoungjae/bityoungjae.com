import React from 'react';
import MainContainer from '../common/MainContainer';
import { ShortPostData, PropInfo } from 'poststore';
import { styled } from 'components/styles/themes/types';
import { PlainList } from 'components/styles/alias';
import PostItem from './PostItem/PostItem';
import TagItem from './TagItem/TagItem';
import SectionTitle from './SectionTitle';
import PageList from './Pagination/PageList';
import { GetProps } from 'components/typings/GetProps';

interface PostListProps extends GetProps<typeof PageList> {
  postList: ShortPostData[];
  tagList: PropInfo[];
}

const PostList: React.FC<PostListProps> = ({
  postList,
  tagList,
  currentPage,
  totalPage,
}) => {
  return (
    <MainContainer>
      <SectionTitle>Posts</SectionTitle>
      <PlainList>
        {postList.map((post) => (
          <PostItem key={post.slug} postData={post} />
        ))}
      </PlainList>
      <SectionTitle>All Tags</SectionTitle>
      <TagContainer>
        {tagList.map((tag) => (
          <TagItem key={tag.slug} tagData={tag} />
        ))}
      </TagContainer>
      <PageList currentPage={currentPage} totalPage={totalPage} />
    </MainContainer>
  );
};

const TagContainer = styled(PlainList)`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 1rem;
`;

export default PostList;
