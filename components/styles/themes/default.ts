import {
  SiteTheme,
  BaseColorList,
  SpecificColorList,
  ColorTheme,
  SizeTheme,
} from 'components/styles/themes/types';

export const baseColors = {
  primary: '#1D54F5',
  white: '#fff',
  black: '#000000b8',
  green: '#27ae60',
  blue: '#1D54F5',
  yellow: '#fdcb6e',
  sharpBlue: 'hsl(211 91% 46% / 1)',
  gray: '#2d3436',
  lightGray: '#7f8c8d',
};

export const specificColors = {
  listBox: baseColors.white,
  textOnListBox: baseColors.lightGray,
  background: baseColors.white,
  textOnBackground: baseColors.white,
  iconOnBackground: baseColors.white,
  textOnFilledHeader: baseColors.gray,
  iconOnFilledHeader: baseColors.primary,
  filledHeaderBackground: baseColors.white,
  boxShadowOnBackground: 'rgba(0, 0, 0, 0.3)',
  heroBackground: '#2f5fd2',
  headerBackground: baseColors.white,
};

const colorTheme: ColorTheme = {
  colors: {
    ...baseColors,
    ...specificColors,
  },
};

const sizeTheme: SizeTheme = {
  logoSize: '2rem',
  fontSize: {
    normal: '1rem',
    small: '.9rem',
  },
  iconSize: {
    small: '1rem',
    normal: '1.6rem',
    big: '2rem',
  },
};

const defaultTheme: SiteTheme = {
  ...colorTheme,
  ...sizeTheme,
};

export default defaultTheme;
