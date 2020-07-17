import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { GetProps } from '../typings/common';
import { getPageRange, getPageRangeProps } from '../utils/getPageRange';
import PageItemLink from 'components/molecules/PageItemLink';

interface PaginationProps extends getPageRangeProps, PaginationBoxProps {
  linkProps: GetProps<Link>;
  buttonColor?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  linkProps,
  fontSize,
  buttonColor,
  ...paginationProps
}) => {
  const pageRange = getPageRange(paginationProps);
  const { current, total } = paginationProps;

  if (!pageRange) return;

  return (
    <PaginationBox fontSize={fontSize}>
      <PageItemLink key={-1} pageNum={1} linkProps={linkProps}>
        {'<<'}
      </PageItemLink>
      {pageRange.map((pageNum) => (
        <PageItemLink
          pageNum={pageNum}
          current={current}
          linkProps={linkProps}
          buttonColor={buttonColor}
          key={pageNum}
        />
      ))}
      <PageItemLink key={9999} pageNum={total} linkProps={linkProps}>
        {'>>'}
      </PageItemLink>
    </PaginationBox>
  );
};
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

export default React.memo(Pagination);
