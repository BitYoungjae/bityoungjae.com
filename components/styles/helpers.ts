import { propMap } from './utils/setCssProp';

export interface IUseFont {
  textFamily?: string;
  textSize?: string;
  textColor?: string;
  textWeight?: string;
  textDeco?: string;
}

export const UseFont = propMap<IUseFont>([
  ['textFamily', 'font-family'],
  ['textSize', 'font-size'],
  ['textWeight', 'font-weight'],
  ['textColor', 'color'],
  ['textDeco', 'text-decoration'],
]);

export interface IUseTextAlign {
  textAlign?: string;
  verticalAlign?: string;
}

export const UseTextAlign = propMap<IUseTextAlign>([
  ['textAlign', 'text-align'],
  ['verticalAlign', 'vertical-align'],
]);

export interface IUseTextSpacing {
  charSpacing?: string;
  wordSpacing?: string;
}

export const UseTextSpacing = propMap<IUseTextSpacing>([
  ['charSpacing', 'letter-spacing'],
  ['wordSpacing', 'word-spacing'],
]);

export interface IUseSize {
  sizeWidth?: string;
  sizeHeight?: string;
}

export const UseSize = propMap<IUseSize>([
  ['sizeWidth', 'width'],
  ['sizeHeight', 'height'],
]);

export interface IUsePadding {
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const UsePadding = propMap<IUsePadding>([
  ['padding', 'padding'],
  ['paddingTop', 'padding-top'],
  ['paddingBottom', 'padding-bottom'],
  ['paddingLeft', 'padding-left'],
  ['paddingRight', 'padding-right'],
]);

export interface IUseMargin {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const UseMargin = propMap<IUseMargin>([
  ['margin', 'margin'],
  ['marginTop', 'margin-top'],
  ['marginBottom', 'margin-bottom'],
  ['marginLeft', 'margin-left'],
  ['marginRight', 'margin-right'],
]);

export interface IUseBackground {
  background?: string;
  backgroundColor?: string;
}

export const UseBackground = propMap<IUseBackground>([
  ['background', 'background'],
  ['backgroundColor', 'background-color'],
]);
