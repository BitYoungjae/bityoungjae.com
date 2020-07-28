import { GlobalProp, PropInfoNode } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import NavItem from '../common/NavItem';
import PopUpContainer from '../common/PopUpContainer';
interface TagNavItemProps {
  categoryTree: GlobalProp['categoryTree'];
}

const categoryList = [
  [],
  [
    {
      parent: 'Javascript',
      list: [],
    },
  ],
  [],
];

const CategoryNavItem: React.FC<TagNavItemProps> = ({ categoryTree }) => {
  const { isHover, hoverMouseEvent } = useMouseHover();
  const rootCategoryList = categoryTree.children;
  const sortedCategoryList = rootCategoryList.sort(
    (aCategory, bCategory) => bCategory.postCount - aCategory.postCount,
  );

  return (
    <>
      <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
        카테고리
        <PopUpContainer isShow={isHover}>
          {/*
            카테고리 리스트 안에 하부 리스트가 있어야 함.
            그래야 hover 가 계속 유지됨.
            
            이 조건을 유지하면서 하부 카테고리 리스트를 우측으로 평행하게 출력하려면 어찌해야 될까.

            카테고리 리스트 자체에 width 값이 있어야 함.
             */}
          dcvdsvsdfcdsfsfdafasfafasfasfasfsafasfasfsafsafsafasf
        </PopUpContainer>
      </NavItem>
    </>
  );
};

[
  [],
  [
    {
      level: 1,
      parent: 'fdsf',
      list: [],
    },
  ],
  [],
];

const makeList = (categoryTree: PropInfoNode, level = 0, parent = '') => {
  const result = [];

  if (!categoryTree.children) return [];

  for (const child of categoryTree.children) {
    makeList(child, level + 1, categoryTree.slug);
  }

  return result;
};

export default CategoryNavItem;
