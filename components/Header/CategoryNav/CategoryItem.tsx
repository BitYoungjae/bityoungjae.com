import React from 'react';
import ListBox from '../common/ListBox';
import TextBox from 'components/common/TextBox';
import ValueBox from '../common/ValueBox';
import { styled } from 'components/typings/Theme';
import { PropInfoNode } from 'poststore';
import { IOnReconcilList } from 'components/hooks/useMuiltipleList';
import { useMouseHover } from 'components/hooks/useMouseHover';

interface CategoryItemProps extends PropInfoNode {
  index: number;
  onReconcilList: IOnReconcilList<PropInfoNode>;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  slug,
  index,
  name,
  postCount,
  childList,
  onReconcilList,
}) => {
  const { isHover, hoverMouseEvent } = useMouseHover();

  return (
    <ListBox
      onMouseEnter={() => {
        onReconcilList(index, childList);
        hoverMouseEvent();
      }}>
      <NameBox size='small'>{name}</NameBox>
      <ValueBox size='small'>{postCount}</ValueBox>
    </ListBox>
  );
};

const NameBox = styled(TextBox)`
  display: inline-block;
  flex-shrink: 0;
  margin-right: auto;
`;

export default React.memo(CategoryItem);
