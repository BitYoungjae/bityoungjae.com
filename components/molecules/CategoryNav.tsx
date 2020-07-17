import React from 'react';
import styled from 'styled-components';
import type { GlobalProp } from 'poststore';

interface CategoryNavProps {
  categoryTree: GlobalProp['categoryTree'];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categoryTree }) => {
  return (
    <>
      <CategoryList>
        {categoryTree.children &&
          categoryTree.children.map((child) => {
            return (
              <CategoryListItem>
                {child.name + ' ' + child.postCount}
                {child.children && <CategoryNav categoryTree={child} />}
              </CategoryListItem>
            );
          })}
      </CategoryList>
    </>
  );
};

const CategoryList = styled.ul``;
const CategoryListItem = styled.li``;

export default CategoryNav;
