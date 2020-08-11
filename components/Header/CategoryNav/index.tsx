import NavItem from '../common/NavItem';
import SubNavContainer from '../common/SubNavContainer';
import SubNavList from '../common/SubNavList';
import Category from './Category';
import { useEffect, useRef } from 'react';
import { GlobalProp, PropInfoNode } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleList } from 'modules/categoryNav/selector';
import { selectCategory, clearCategory } from 'modules/categoryNav/slice';

interface TagNavItemProps {
  rootCategoryNode: GlobalProp['categoryTree'];
}

const CategoryNavItem: React.FC<TagNavItemProps> = ({ rootCategoryNode }) => {
  const {
    isHover,
    hoverMouseEvent,
    leaveMouseEvent,
    containerRef,
  } = useMouseHover();

  const dispatch = useDispatch();
  const visibleList = useSelector(getVisibleList);

  useEffect(() => {
    if (isHover) {
      const rootCategoryList = rootCategoryNode.childList ?? [];

      dispatch(
        selectCategory({ listIndex: 0, itemIndex: 0, list: rootCategoryList })
      );
    } else {
      dispatch(clearCategory());
    }
  }, [isHover]);

  return (
    <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={leaveMouseEvent}>
      카테고리
      <SubNavContainer isHide={!isHover} ref={containerRef}>
        <SubNavList listDirection='row'>
          {visibleList.map((list, index) => (
            <Category key={index} list={list} listIndex={index} />
          ))}
        </SubNavList>
      </SubNavContainer>
    </NavItem>
  );
};

export default CategoryNavItem;
