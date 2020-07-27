import React from 'react';
import { getGlobalPageHandler, GlobalProp } from 'poststore';
import Header from '../components/Header';

const About: React.FC<GlobalProp> = ({ ...global }) => <Header {...global} />;

export default About;

const { getMainProps } = getGlobalPageHandler({
  storeName: 'blog',
  useConfig: true,
});

export async function getStaticProps() {
  const props = await getMainProps();

  return {
    props,
  };
}
