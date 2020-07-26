import React, { useEffect, useState, useMemo, useContext } from 'react';
import { ListPageProp } from 'poststore';
import PostList from 'components/organism/PostList';
import Pagination from 'components/organism/Pagination';
import FixedPagination from 'components/molecules/FixedPagination';
import PageChangeAlaram from 'components/molecules/PageChangeAlarm';
import CommonLayout, { Main, Footer } from './CommonLayout';
import { IUseLink } from 'components/typings/common';
import { trimPageParam } from 'components/common/utils';
import { SiteContext } from 'pages/_app';

const PostListPage: React.FC<ListPageProp & IUseLink> = ({
  param,
  global: { categoryTree, tagList },
  main: { postList, currentPage, totalPage },
  linkProps,
}) => {
  const trimmedParam = trimPageParam(param);
  const paginationAs = `${linkProps.as}${
    trimmedParam && trimmedParam + '/page/'
  }`;

  const { isTabletOrMobile } = useContext(SiteContext);

  const paginationLinkProps = {
    ...linkProps,
    as: paginationAs,
  };

  return (
    <CommonLayout categoryTree={categoryTree} tagList={tagList}>
      {isTabletOrMobile && <PageChangeAlaram currentPage={currentPage} />}

      <PostList postList={postList} href='/[post]' as='/' />

      <Footer>
        <Pagination
          current={currentPage}
          total={totalPage}
          displayRange={5}
          linkProps={paginationLinkProps}
          textSize='1.2rem'
        />
      </Footer>
      {isTabletOrMobile && (
        <FixedPagination
          current={currentPage}
          total={totalPage}
          linkProps={paginationLinkProps}
        />
      )}
    </CommonLayout>
  );
};

export default React.memo(PostListPage);
