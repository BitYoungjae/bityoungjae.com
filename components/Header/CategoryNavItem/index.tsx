import { GlobalProp } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import NavItem from '../common/NavItem';
import HideableContainer from '../common/HideableContainer';
import PlainListItem from '../common/PlainListItem';
import styled from 'styled-components';
import PopUpContainer from '../common/PopUpContainer';

interface TagNavItemProps {
  categoryTree: GlobalProp['categoryTree'];
}

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
        {isHover && (
          <HideableContainer>
            <ListContainer>
              {sortedCategoryList.map(({ name, postCount, slug }) => {
                return (
                  <PlainListItem
                    key={slug}
                    name={name}
                    content={`${postCount}`}
                  />
                );
              })}
            </ListContainer>
          </HideableContainer>
        )}
      </NavItem>
    </>
  );
};

const ListContainer = styled(PopUpContainer)`
  width: 10rem;
`;

export default CategoryNavItem;
