import NavItem from '../common/NavItem';
import SubNavContainer from '../common/SubNavContainer';
import SubNavList from '../common/SubNavList';
import Category from './Category';
import { useEffect } from 'react';
import { GlobalProp, PropInfoNode } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { useMultipleList } from 'components/hooks/useMuiltipleList';
import { postInfoSort } from '../common/postInfoSort';

interface TagNavItemProps {
  rootCategoryNode: GlobalProp['categoryTree'];
}

const CategoryNavItem: React.FC<TagNavItemProps> = ({ rootCategoryNode }) => {
  const rootCategoryList = rootCategoryNode.childList ?? [];
  const { isHover, hoverMouseEvent } = useMouseHover();
  const { displayList, onReconcilList, onInitList } = useMultipleList(
    [rootCategoryList],
    postInfoSort,
  );

  useEffect(() => {
    onInitList();
  }, [isHover]);

  return (
    <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
      카테고리
      <SubNavContainer isHide={!isHover}>
        <SubNavList direction='row'>
          {displayList.map((list, index) => (
            <Category
              key={index}
              list={list}
              index={index}
              onReconcilList={onReconcilList}
            />
          ))}
        </SubNavList>
      </SubNavContainer>
    </NavItem>
  );
};

export default CategoryNavItem;
