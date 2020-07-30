import React from 'react';
import CategoryList from './CategoryList';
import CategoryItem from './CategoryItem';
import { PropInfoNode } from 'poststore';
import { IOnReconcilList } from 'components/hooks/useMuiltipleList';

interface CategoryListProps {
  list: PropInfoNode[];
  index: number;
  selectedIndex: number;
  onReconcilList: IOnReconcilList<PropInfoNode>;
}

const Category: React.FC<CategoryListProps> = ({
  list,
  index,
  selectedIndex,
  onReconcilList,
}) => {
  return (
    <CategoryList>
      {list.map(({ slug, name, childList, postCount }, itemIndex) => (
        <CategoryItem
          key={slug}
          index={index}
          isSelected={selectedIndex === itemIndex}
          itemIndex={itemIndex}
          slug={slug}
          name={name}
          childList={childList}
          postCount={postCount}
          onReconcilList={onReconcilList}
        />
      ))}
    </CategoryList>
  );
};

export default React.memo(Category);
