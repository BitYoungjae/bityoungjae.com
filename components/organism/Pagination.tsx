import React from 'react';
import styled from 'styled-components';
import { IUseLink } from '../typings/common';
import { getPageRange, getPageRangeProps } from '../utils/getPageRange';
import PageItemLink from 'components/molecules/PageItemLink';
import { PlainList } from 'components/styles/plains';

interface PaginationProps
  extends getPageRangeProps,
    PaginationBoxProps,
    IUseLink {
  fontColor?: string;
  buttonColor?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  linkProps,
  fontSize,
  fontColor = '#95a5a6',
  buttonColor = 'dodgerBlue',
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

const PaginationBox = styled(PlainList)<PaginationBoxProps>`
  display: flex;
  justify-content: space-evenly;

  font-size: ${({ fontSize = '1rem' }) => fontSize};

  border-radius: 0.5em;

  background-color: white;
  border: 0.1em solid #ecf0f1;

  padding: 0.5em;
`;

export default React.memo(Pagination);
