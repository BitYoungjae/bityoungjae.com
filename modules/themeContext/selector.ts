import { RootState } from 'modules';

export const getTheme = (state: RootState) => state.themeContext.theme;
export const getThemeMode = (state: RootState) => state.themeContext.themeMode;
