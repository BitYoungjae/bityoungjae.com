import React from 'react';
import { PostData } from 'poststore/dist/typings';
import styled from 'styled-components';
import PostListItem from '../molecules/PostListItem';

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;
  padding: 0;
`;

interface PostListProps {
  postList: PostData[];
  href: string;
  as: string;
}

const PostList: React.FC<PostListProps> = ({ postList, href, as }) => {
  return (
    <ListBox>
      {postList.map((post, index) => (
        <PostListItem key={index} postData={post} href={href} as={as} />
      ))}
    </ListBox>
  );
};

export default PostList;
