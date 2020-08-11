import React, { createContext } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import PostList from 'components/Main/PostList';
import { GlobalProp, ShortPostData, PropInfo } from 'poststore';
import Footer from 'components/Footer/Footer';

interface ListPageProps {
  globalProps: GlobalProp;
  postList: ShortPostData[];
  tagList: PropInfo[];
  totalPage: number;
  currentPage: number;
  pagePrefix?: string;
}

export const PagePrefixContxt = createContext('');

const ListPage: React.FC<ListPageProps> = ({
  globalProps,
  postList,
  tagList,
  totalPage,
  currentPage,
  pagePrefix = '',
}) => {
  return (
    <>
      <Header globalProp={globalProps} />
      <Hero />
      <PagePrefixContxt.Provider value={pagePrefix}>
        <PostList
          postList={postList}
          tagList={tagList}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </PagePrefixContxt.Provider>
      <Footer />
    </>
  );
};

export default ListPage;
