import React, { useEffect, useState } from 'react';
import { ListPageProp } from 'poststore';
import styled from 'styled-components';
import Header from 'components/organism/Header';
import PostList from 'components/organism/PostList';
import Pagination from 'components/organism/Pagination';
import FixedPagination from 'components/molecules/FixedPagination';
import PageChangeAlaram from 'components/molecules/PageChangeAlarm';
import CategoryNav from 'components/molecules/CategoryNav';
import { linkProps, textStyles } from 'components/common/constants';
import SlideMenu from 'components/molecules/SlideMenu';

const PostListPage: React.FC<ListPageProp> = ({
  global: { categoryTree },
  main: { postList, currentPage, totalPage },
}) => {
  const [isChangePage, setChangePage] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setChangePage(false), 700);
    return () => {
      clearTimeout(timerId);
      setChangePage(true);
    };
  }, [currentPage]);

  return (
    <>
      {isChangePage && <PageChangeAlaram currentPage={currentPage} />}
      <SlideMenu />
      <Header
        mainText='BITYOUNGJAE'
        subText='개발자하려고 퇴사했습니다'
        texts={textStyles.header}
        linkProps={linkProps.home}
        backgroundColor='#4291F7'
      />
      <Main>
        <PostList postList={postList} href='/blog/[post]' as='/blog/' />
      </Main>
      <Footer>
        <Pagination
          current={currentPage}
          total={totalPage}
          displayRange={5}
          linkProps={linkProps.page}
          fontSize='1.2rem'
        />
      </Footer>
      <FixedPagination
        current={currentPage}
        total={totalPage}
        linkProps={linkProps.page}
      />
    </>
  );
};

const Main = styled.section`
  padding: 0.8rem 0.5rem;
`;

const Footer = styled.footer`
  padding: 0 0.5rem;
`;

export default React.memo(PostListPage);
