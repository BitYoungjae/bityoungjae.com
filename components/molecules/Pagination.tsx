import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { GetProps } from '../typings/common';
import { getPageRange, getPageRangeProps } from '../utils/getPageRange';

interface PaginationProps extends getPageRangeProps, PaginationBoxProps {
  linkProps: GetProps<Link>;
}

const Pagination: React.FC<PaginationProps> = ({
  linkProps,
  ...paginationProps
}) => {
  const pageRange = getPageRange(paginationProps);
  const { current } = paginationProps;

  if (!pageRange) return;

  return (
    <PaginationBox fontSize='2rem'>
      {pageRange.map((pageNum) => (
        <PageItem key={pageNum} isActive={pageNum === current}>
          <Link {...linkProps} as={`${linkProps.as}${pageNum}`}>
            <a>{pageNum}</a>
          </Link>
        </PageItem>
      ))}
    </PaginationBox>
  );
};

export default Pagination;

interface PaginationBoxProps {
  fontSize?: string;
}

const PaginationBox = styled.ul<PaginationBoxProps>`
  display: flex;
  justify-content: space-evenly;

  font-size: ${({ fontSize = '1rem' }) => fontSize};

  border-radius: 0.5em;

  background-color: white;
  border: 0.1em solid #ecf0f1;

  margin: 0;
  padding: 0.5em;
  list-style: none;
`;

interface PageItemProps {
  isActive: boolean;
}

const PageItem = styled.li<PageItemProps>`
  & a {
    font-size: inherit;
    font-weight: bold;

    width: 2em;
    height: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #95a5a6;

    ${({ isActive }) =>
      isActive ? reversedStyle('dodgerBlue', 'white') : null};

    border-radius: 0.4em;
    text-decoration: none;
  }
`;

const reversedStyle = (bgColor: string, color: string) => css`
  background-color: ${bgColor};
  color: ${color};
`;
