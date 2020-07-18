import React from 'react';
import styled from 'styled-components';
import { IUseLink } from '../typings/common';
import { getPageRange, getPageRangeProps } from '../utils/getPageRange';
import PageItemLink from 'components/molecules/PageItemLink';
import { PlainList } from 'components/styles/plains';
import { IUseFont, UseFont } from 'components/styles/helpers';

interface PaginationProps extends getPageRangeProps, IUseLink {
  textSize?: string;
  buttonColor?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  linkProps,
  textSize,
  buttonColor = 'dodgerBlue',
  ...paginationProps
}) => {
  const pageRange = getPageRange(paginationProps);
  const { current, total } = paginationProps;

  if (!pageRange) return;

  return (
    <PaginationBox textSize={textSize}>
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

const PaginationBox = styled(PlainList)<IUseFont>`
  display: flex;
  justify-content: space-evenly;

  ${UseFont}

  border-radius: 0.5em;

  background-color: white;
  border: 0.1em solid #ecf0f1;

  padding: 0.5em;
`;

export default React.memo(Pagination);
