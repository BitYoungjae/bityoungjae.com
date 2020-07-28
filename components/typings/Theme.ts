import baseStyled, {
  css as baseCSS,
  ThemedStyledInterface,
  ThemedCssFunction,
} from 'styled-components';

export type ColorList = 'green' | 'blue' | 'lightGray' | 'filledHeader';
export type SizeList = 'x-small' | 'small' | 'normal' | 'big' | 'x-big';

export interface SiteTheme {
  logoSize: string;
  colors: {
    [key in ColorList]?: string;
  };
  fontSize: {
    [key in SizeList]?: string;
  };
  iconSize: {
    [key in SizeList]?: string;
  };
}

export type FontSize = keyof SiteTheme['fontSize'];
export type IconSize = keyof SiteTheme['iconSize'];

export const styled = baseStyled as ThemedStyledInterface<SiteTheme>;
export const css = baseCSS as ThemedCssFunction<SiteTheme>;
