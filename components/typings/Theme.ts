import baseStyled, {
  css as baseCSS,
  ThemedStyledInterface,
  ThemedCssFunction,
} from 'styled-components';

export type BaseColorList =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'black'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'sharpBlue'
  | 'gray'
  | 'indigo'
  | 'lightGray';
export type SpecificColorList =
  | 'listBox'
  | 'textOnListBox'
  | 'background'
  | 'iconOnBackground'
  | 'textOnBackground'
  | 'iconOnFilledHeader'
  | 'textOnFilledHeader'
  | 'filledHeaderBackground'
  | 'boxShadowOnBackground';
export type ColorList = BaseColorList | SpecificColorList;

export type SizeList = 'x-small' | 'small' | 'normal' | 'big' | 'x-big';

export interface SizeTheme<
  F extends SizeList = SizeList,
  I extends SizeList = SizeList
> {
  logoSize: string;
  fontSize: {
    [key in F]?: string;
  };
  iconSize: {
    [key in I]?: string;
  };
}

export interface ColorTheme<T extends ColorList = ColorList> {
  colors: {
    [key in T]?: string;
  };
}

export interface SiteTheme<
  C extends ColorList = ColorList,
  F extends SizeList = SizeList,
  I extends SizeList = SizeList
> extends SizeTheme<F, I>, ColorTheme<C> {}

// Theme Aliases
export type FontSize = keyof SiteTheme['fontSize'];
export type IconSize = keyof SiteTheme['iconSize'];

export const styled = baseStyled as ThemedStyledInterface<SiteTheme>;
export const css = baseCSS as ThemedCssFunction<SiteTheme>;
