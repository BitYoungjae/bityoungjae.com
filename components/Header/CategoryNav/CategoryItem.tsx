import React from 'react';
import ListBox from '../common/ListBox';
import TextBox from 'components/common/TextBox';
import ValueBox from '../common/ValueBox';
import { styled, css } from 'components/typings/Theme';
import { PropInfoNode } from 'poststore';
import { IOnReconcilList } from 'components/hooks/useMuiltipleList';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { UpdateStyledProps } from 'components/typings/SCHelper';

interface CategoryItemProps extends PropInfoNode {
  index: number;
  itemIndex: number;
  isSelected: boolean;
  onReconcilList: IOnReconcilList<PropInfoNode>;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  slug,
  index,
  itemIndex,
  isSelected,
  name,
  postCount,
  childList,
  onReconcilList,
}) => {
  const { hoverMouseEvent } = useMouseHover();

  return (
    <ListBox
      onMouseEnter={() => {
        onReconcilList(index, itemIndex, childList);
        hoverMouseEvent();
      }}>
      <NameBox size='small' isSelected={isSelected}>
        {name}
      </NameBox>
      <ValueBox size='small'>{postCount}</ValueBox>
    </ListBox>
  );
};

const SelectableTextBox = TextBox as UpdateStyledProps<
  typeof TextBox,
  { isSelected: boolean }
>;

const NameBox = styled(SelectableTextBox)`
  display: inline-block;
  flex-shrink: 0;
  margin-right: auto;

  ${({ isSelected }) => isSelected && selectedStyle};
`;

const selectedStyle = css`
  color: ${({ theme }) => theme.colors.blue};
`;

export default React.memo(CategoryItem);
