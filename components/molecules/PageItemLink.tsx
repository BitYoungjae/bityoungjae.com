import React from 'react';
import Link from 'next/link';
import PageItem from 'components/atoms/PageItem';
import { GetProps, IUseLink } from 'components/typings/common';

interface PageItemLinkProps extends GetProps<typeof PageItem>, IUseLink {
  pageNum: number;
  current?: number;
}

const PageItemLink: React.FC<PageItemLinkProps> = ({
  pageNum,
  current,
  linkProps,
  buttonColor,
  children,
}) => {
  return (
    <PageItem
      key={pageNum}
      isActive={pageNum === current}
      buttonColor={buttonColor}>
      <Link {...linkProps} as={`${linkProps.as}${pageNum}`}>
        <a>{children ? children : pageNum}</a>
      </Link>
    </PageItem>
  );
};

export default React.memo(PageItemLink);
