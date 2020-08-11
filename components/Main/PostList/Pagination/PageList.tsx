import React, { useContext } from 'react';
import { getPageRange } from 'components/utils/getPageRange';
import { styled, css } from 'components/styles/themes/types';
import { PlainList, PlainAnchor } from 'components/styles/alias';
import FontAwsome from 'components/common/FontAwsome';
import { PagePrefixContxt } from 'layout/ListPage';
import Link from 'next/link';

interface PageListProps {
  currentPage: number;
  totalPage: number;
}

const PageList: React.FC<PageListProps> = ({ currentPage, totalPage }) => {
  const pageList = getPageRange({
    current: currentPage,
    displayRange: 10,
    total: totalPage,
  });

  return (
    <PageListContainer>
      {currentPage > 1 && (
        <PageItem key={0} pageNum={1}>
          <FontAwsome iconName='fas fa-chevron-left' />
        </PageItem>
      )}
      {pageList.map((pageNum) => (
        <PageItem
          key={pageNum}
          pageNum={pageNum}
          isCurrent={currentPage === pageNum}
        >
          {pageNum}
        </PageItem>
      ))}
      {totalPage > currentPage && (
        <PageItem key={totalPage + 1} pageNum={totalPage}>
          <FontAwsome iconName='fas fa-chevron-right' />
        </PageItem>
      )}
    </PageListContainer>
  );
};

const PageListContainer = styled(PlainList)`
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  background-color: white;
  border-radius: 1rem;
`;

interface PageItemProps {
  pageNum: number;
  isCurrent?: boolean;
}

const PageItem: React.FC<PageItemProps> = ({
  isCurrent = false,
  pageNum,
  children,
}) => {
  const pagePrefix = useContext(PagePrefixContxt);

  return (
    <Link href='/[...page]' as={`${pagePrefix}page/${pageNum}`}>
      <PageAnchor>
        <PageItemBox isCurrent={isCurrent}>{children}</PageItemBox>
      </PageAnchor>
    </Link>
  );
};

const PageAnchor = styled(PlainAnchor)`
  & + & {
    margin-left: 1rem;
  }
`;

interface PageItemBoxProps {
  isCurrent: boolean;
}

const PageItemBox = styled.li<PageItemBoxProps>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  padding: 1.5rem;
  font-size: 1.3rem;

  border-radius: 0.5rem;
  transition: background-color 0.3s;

  color: black;

  ${({ isCurrent }) => isCurrent && currentStyle};
  ${({ isCurrent }) => !isCurrent && hoverStyle};
`;

const currentStyle = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const hoverStyle = css`
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export default PageList;
