import { SiteTheme } from 'components/typings/Theme';

const colorBase = {
  white: '#fff',
  black: '#000000b8',
  green: '#27ae60',
  blue: '#0984E3',
  lightGray: '#7f8c8d',
};

const defaultTheme: SiteTheme = {
  logoSize: '2rem',
  colors: {
    primary: colorBase.blue,
    listBox: colorBase.white,
    textOnListBox: colorBase.lightGray,
    background: colorBase.white,
    textOnBackground: colorBase.black,
    iconOnBackground: colorBase.blue,
    filledHeader: colorBase.white,
    ...colorBase,
  },
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

export default defaultTheme;
