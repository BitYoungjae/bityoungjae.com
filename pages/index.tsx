import React from 'react';
import { getMainPageHandler, ListPageProp } from 'poststore';
import Header from '../components/Header';

const Post: React.FC<ListPageProp> = ({ global }) => <Header {...global} />;

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