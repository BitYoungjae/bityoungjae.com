import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import defaultTheme from 'components/styles/themes/default';
import { SiteTheme } from 'components/typings/Theme';
import { ThemeMode, themeList } from 'components/styles/themes';

interface ThemeContextState {
  theme: SiteTheme;
  themeMode: ThemeMode;
}

const INITIAL_STATE: ThemeContextState = {
  theme: defaultTheme,
  themeMode: 'light',
};

type SetThemePayload = { themeMode: ThemeMode };

const themeSlice = createSlice({
  name: 'themeContext',
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (
      state,
      { payload: { themeMode } }: PayloadAction<SetThemePayload>
    ) => {
      state.themeMode = themeMode;
      state.theme = themeList[themeMode];
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
