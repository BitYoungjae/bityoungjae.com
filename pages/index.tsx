import React from 'react';
import { getMainPageHandler, ListPageProp } from 'poststore';
import Header from '../components/Header';
import Hero from 'components/Hero';

const Post: React.FC<ListPageProp> = ({ global }) => (
  <>
    <Header {...global} />
    <Hero />
  </>
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
