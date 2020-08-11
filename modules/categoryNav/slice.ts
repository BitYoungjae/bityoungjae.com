import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropInfoNode } from 'poststore';

interface CategoryNavState {
  visibleList: PropInfoNode[][];
  selectedIndexList: number[];
}

const INITIAL_STATE: CategoryNavState = {
  visibleList: [],
  selectedIndexList: [],
};

type SelectCategoryPayload = {
  listIndex: number;
  itemIndex: number;
  list: PropInfoNode[];
};

const categoryNavSlice = createSlice({
  name: 'categoryNav',
  initialState: INITIAL_STATE,
  reducers: {
    selectCategory: (
      state,
      {
        payload: { list, listIndex, itemIndex },
      }: PayloadAction<SelectCategoryPayload>
    ) => {
      const { visibleList, selectedIndexList } = state;

      const newVisibleList = visibleList.slice(0, listIndex + 1);
      const newSelectedIndexList = selectedIndexList.slice(0, listIndex + 1);

      if (list) {
        newVisibleList.push(list);
      }
      newSelectedIndexList[listIndex] = itemIndex;

      state.visibleList = newVisibleList;
      state.selectedIndexList = newSelectedIndexList;
    },
    clearCategory: (state) => {
      state.visibleList = [];
      state.selectedIndexList = [];
    },
  },
});

export const { selectCategory, clearCategory } = categoryNavSlice.actions;
export default categoryNavSlice.reducer;
