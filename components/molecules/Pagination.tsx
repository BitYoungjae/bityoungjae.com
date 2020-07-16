import React from 'react';
import Link from 'next/link';
import { GetProps } from '../typings/common';
import { usePagination, usePaginationProps } from '../hooks/usePagination';

interface PaginationProps extends usePaginationProps {
  linkProps: GetProps<Link>;
}

const Pagination: React.FC<PaginationProps> = ({
  linkProps,
  ...paginationProps
}) => {
  const pageRange = usePagination(paginationProps);

  if (!pageRange) return;

  return (
    <ul>
      {pageRange.map((pageNum) => (
        <li key={pageNum}>
          <Link {...linkProps} as={`${linkProps.as}${pageNum}`}>
            <a>{pageNum}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
