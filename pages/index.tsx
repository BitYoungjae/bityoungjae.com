import React from 'react';
import PostListPage from '../components/layout/PostListPage';
import { getMainPageHandler, ListPageProp } from 'poststore';
import { linkProps } from 'components/common/constants';

const Post: React.FC<ListPageProp> = (props) => (
  <PostListPage {...props} linkProps={linkProps.page} />
);

export default Post;

const { getMainProps } = getMainPageHandler({
  storeName: 'blog',
  useConfig: true,
});

export async function getStaticProps() {
  const props = await getMainProps();

  return {
    props,
  };
}
