import {
  SiteTheme,
  BaseColorList,
  SpecificColorList,
  ColorTheme,
  SizeTheme,
} from 'components/typings/Theme';

const baseColors: ColorTheme<BaseColorList>['colors'] = {
  white: '#fff',
  black: '#000000b8',
  green: '#27ae60',
  blue: '#0984E3',
  yellow: '#fdcb6e',
  sharpBlue: 'hsl(211 91% 46% / 1)',
  lightGray: '#7f8c8d',
};

const specificColors: ColorTheme<SpecificColorList>['colors'] = {
  primary: baseColors.blue,
  listBox: baseColors.white,
  textOnListBox: baseColors.lightGray,
  background: baseColors.white,
  textOnBackground: baseColors.black,
  iconOnBackground: baseColors.sharpBlue,
  textOnFilledHeader: baseColors.lightGray,
  iconOnFilledHeader: baseColors.blue,
  filledHeaderBackground: baseColors.white,
  boxShadowOnBackground: 'rgba(0, 0, 0, 0.3)',
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
    normal: '1rem',
    small: '.8rem',
    big: '1.6rem',
  },
};

const defaultTheme: SiteTheme = {
  ...colorTheme,
  ...sizeTheme,
};

export default defaultTheme;
