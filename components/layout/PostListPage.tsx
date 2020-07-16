import React from 'react';
import { ListPageProp } from 'poststore';
import styled from 'styled-components';
import Header from 'components/organism/Header';
import PostList from 'components/organism/PostList';
import Pagination from 'components/molecules/Pagination';

const PostListPage: React.FC<ListPageProp> = ({
  main: { postList, currentPage, totalPage },
}) => {
  return (
    <>
      <Header
        mainText='BITYOUNGJAE'
        subText='개발자하려고 퇴사했습니다'
        texts={{
          main: {
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '.03em',
          },
        }}
        linkProps={{
          href: '/blog',
        }}
      />
      <Main>
        <PostList postList={postList} href='/blog/[post]' as='/blog/' />
      </Main>
      <Footer>
        <Pagination
          current={currentPage}
          total={totalPage}
          displayRange={5}
          linkProps={{ href: '/blog/[...page]', as: '/blog/page/' }}
          fontSize='1.2rem'
        />
      </Footer>
    </>
  );
};

const Main = styled.section`
  padding: 0.8rem 0.5rem;
`;

const Footer = styled.footer`
  padding: 0 0.5rem;
`;

export default PostListPage;
