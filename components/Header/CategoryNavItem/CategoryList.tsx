import React from 'react';
import { PropInfoNode } from 'poststore';
import { styled } from 'components/typings/Theme';
import { PlainList } from 'components/styles/alias';
import ListItemBox from '../common/ListItemBox';
import { ValueBox } from '../common/ValueBox';
import TextBox from 'components/common/TextBox';
import { IOnReconcilList } from 'components/hooks/useMuiltipleList';
import { useMouseHover } from 'components/hooks/useMouseHover';

interface CategoryListProps {
  list: PropInfoNode[];
  index: number;
  onReconcilList: IOnReconcilList<PropInfoNode>;
}

const CategoryList: React.FC<CategoryListProps> = ({
  list,
  index,
  onReconcilList,
}) => {
  return (
    <CategoryItemBox>
      {list.map(({ slug, name, childList, postCount }) => (
        <CategoryListItem
          key={slug}
          index={index}
          slug={slug}
          name={name}
          childList={childList}
          postCount={postCount}
          onReconcilList={onReconcilList}
        />
      ))}
    </CategoryItemBox>
  );
};

const CategoryItemBox = styled(PlainList)`
  width: auto;
`;

interface CategoryListItemProps extends PropInfoNode {
  index: number;
  onReconcilList: IOnReconcilList<PropInfoNode>;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  slug,
  index,
  name,
  postCount,
  childList,
  onReconcilList,
}) => {
  const { isHover, hoverMouseEvent } = useMouseHover();

  return (
    <ListItemBox
      onMouseEnter={() => {
        onReconcilList(index, childList);
        hoverMouseEvent();
      }}>
      <NameBox>{name}</NameBox>
      <CountBox>{postCount}</CountBox>
    </ListItemBox>
  );
};

const NameBox = styled(TextBox)`
  display: inline-block;
  flex-shrink: 0;
  margin-right: auto;
`;

const CountBox = styled(ValueBox)`
  display: inline-block;
  margin-left: 1rem;
`;

export default CategoryList;
