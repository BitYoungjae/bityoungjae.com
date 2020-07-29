import React from 'react';
import CategoryList from './CategoryList';
import CategoryItem from './CategoryItem';
import { PropInfoNode } from 'poststore';
import { IOnReconcilList } from 'components/hooks/useMuiltipleList';

interface CategoryListProps {
  list: PropInfoNode[];
  index: number;
  onReconcilList: IOnReconcilList<PropInfoNode>;
}

const Category: React.FC<CategoryListProps> = ({
  list,
  index,
  onReconcilList,
}) => {
  return (
    <CategoryList>
      {list.map(({ slug, name, childList, postCount }) => (
        <CategoryItem
          key={slug}
          index={index}
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
