import React from 'react';
import { getMainPageHandler, ListPageProp } from 'poststore';
import ListPage from 'layout/ListPage';

const Post: React.FC<ListPageProp> = ({
  global,
  main: { postList, currentPage, totalPage },
}) => (
  <ListPage
    globalProps={global}
    postList={postList}
    tagList={global.tagList}
    currentPage={currentPage}
    totalPage={totalPage}
  />
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
