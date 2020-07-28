import { GlobalProp, PropInfoNode } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import NavItem from '../common/NavItem';
import PopUpContainer from '../common/PopUpContainer';
import { useState, useCallback, useEffect } from 'react';
import CategoryList from './CategoryList';
import { styled, css } from 'components/typings/Theme';
import { useMultipleList } from 'components/hooks/useMuiltipleList';
interface TagNavItemProps {
  rootCategoryNode: GlobalProp['categoryTree'];
}

const CategoryNavItem: React.FC<TagNavItemProps> = ({ rootCategoryNode }) => {
  const { isHover, hoverMouseEvent } = useMouseHover();
  const rootCategoryList = rootCategoryNode.childList ?? [];
  const { displayList, onReconcilList, onInitList } = useMultipleList([
    rootCategoryList,
  ]);

  useEffect(() => {
    onInitList();
  }, [isHover]);

  return (
    <>
      <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
        카테고리
        <CategoryContainer isShow={true}>
          {displayList.map((list, index) => (
            <CategoryList
              list={list}
              index={index}
              onReconcilList={onReconcilList}
            />
          ))}
        </CategoryContainer>
      </NavItem>
    </>
  );
};

const CategoryContainer = styled(PopUpContainer)`
  ${({ isShow }) =>
    isShow &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

export default CategoryNavItem;
