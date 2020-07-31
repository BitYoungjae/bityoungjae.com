import defaultTheme from './default';
import {
  SiteTheme,
  ColorTheme,
  BaseColorList,
  SpecificColorList,
} from 'components/typings/Theme';

const baseColors: ColorTheme<BaseColorList>['colors'] = {
  primary: '#ff7675',
  white: '#dfe6e9',
  black: '#000000b8',
  green: '#27ae60',
  blue: '#0984E3',
  yellow: '#fdcb6e',
  sharpBlue: 'hsl(211 91% 46% / 1)',
  gray: '#2d3436',
  lightGray: '#636e72',
};

const specificColors: ColorTheme<SpecificColorList>['colors'] = {
  listBox: '#636e72',
  textOnListBox: 'white',
  background: baseColors.gray,
  textOnBackground: baseColors.white,
  iconOnBackground: baseColors.primary,
  textOnFilledHeader: baseColors.white,
  iconOnFilledHeader: baseColors.primary,
  filledHeaderBackground: 'hsl(0 0% 10% / 1)',
  boxShadowOnBackground: 'rgba(0, 0, 0, 0.3)',
};

const colorTheme: ColorTheme = {
  colors: {
    ...baseColors,
    ...specificColors,
  },
};

const darkTheme: SiteTheme = { ...defaultTheme, ...colorTheme };

export default darkTheme;
