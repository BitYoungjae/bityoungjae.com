import { RootState } from 'modules';
import { createSelector } from '@reduxjs/toolkit';

export const getVisibleList = (state: RootState) =>
  state.categoryNav.visibleList;
export const getSelectedIndexList = (state: RootState) =>
  state.categoryNav.selectedIndexList;
export const getSelectedIndex = (listIndex: number) =>
  createSelector(getSelectedIndexList, (indexList) => indexList[listIndex]);
