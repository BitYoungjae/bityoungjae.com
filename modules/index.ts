import { configureStore } from '@reduxjs/toolkit';
import categoryNavReducer from './categoryNav/slice';
import themeContextReducer from './themeContext/slice';

const store = configureStore({
  reducer: {
    categoryNav: categoryNavReducer,
    themeContext: themeContextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
