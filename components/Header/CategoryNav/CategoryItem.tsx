import React from 'react';
import ListBox from '../common/ListBox';
import TextBox from 'components/common/TextBox';
import ValueBox from '../common/ValueBox';
import { styled, css } from 'components/styles/themes/types';
import { PropInfoNode } from 'poststore';
import { IOnReconcilList } from 'components/hooks/useMuiltipleList';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { UpdateStyledProps } from 'components/typings/SCHelper';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from 'modules/categoryNav/slice';
import {
  getSelectedIndexList,
  getSelectedIndex,
} from 'modules/categoryNav/selector';

interface CategoryItemProps extends PropInfoNode {
  listIndex: number;
  itemIndex: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  slug,
  listIndex,
  itemIndex,
  name,
  postCount,
  childList,
}) => {
  const dispatch = useDispatch();
  const isSelected = itemIndex === useSelector(getSelectedIndex(listIndex));
  const { hoverMouseEvent } = useMouseHover();

  return (
    <ListBox
      onMouseEnter={() => {
        dispatch(selectCategory({ listIndex, itemIndex, list: childList }));
        hoverMouseEvent();
      }}
    >
      <NameBox size='normal' isSelected={isSelected}>
        {name}
      </NameBox>
      <ValueBox size='normal'>{postCount}</ValueBox>
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
  color: ${({ theme }) => theme.colors.primary};
`;

export default React.memo(CategoryItem);
