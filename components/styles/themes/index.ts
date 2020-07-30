import defaultTheme from './default';
import darkTheme from './dark';

export type ThemeMode = keyof typeof themeList;

export const themeList = {
  light: defaultTheme,
  dark: darkTheme,
};
