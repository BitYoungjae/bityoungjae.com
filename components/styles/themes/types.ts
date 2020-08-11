import baseStyled, {
  css as baseCSS,
  ThemedStyledInterface,
  ThemedCssFunction,
} from 'styled-components';
import { baseColors, specificColors } from './default';

export type BaseColorList = keyof typeof baseColors;
export type SpecificColorList = keyof typeof specificColors;
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
