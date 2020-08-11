import React from 'react';
import CategoryList from './CategoryList';
import CategoryItem from './CategoryItem';
import { PropInfoNode } from 'poststore';

interface CategoryListProps {
  list: PropInfoNode[];
  listIndex: number;
}

const Category: React.FC<CategoryListProps> = ({ list, listIndex }) => {
  return (
    <CategoryList>
      {list.map(({ slug, name, childList, postCount }, index) => (
        <CategoryItem
          key={slug}
          listIndex={listIndex}
          itemIndex={index}
          slug={slug}
          name={name}
          childList={childList}
          postCount={postCount}
        />
      ))}
    </CategoryList>
  );
};

export default React.memo(Category);
