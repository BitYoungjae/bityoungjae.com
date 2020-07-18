import { css } from 'styled-components';
import { propMap } from './utils/setCssProp';

export interface IUseFont {
  fontFamily?: string;
  textSize?: string;
  color?: string;
  fontWeight?: string;
}

export const UseFont = propMap<IUseFont>([
  ['fontFamily', 'font-family'],
  ['textSize', 'font-size'],
  ['fontWeight', 'font-weight'],
  ['color', 'color'],
]);

export interface IUseTextSpacing {
  letterSpacing?: string;
  wordSpacing?: string;
}

export const UseTextSpacing = propMap<IUseTextSpacing>([
  ['letterSpacing', 'letter-spacing'],
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

export interface IUseBackground {
  background?: string;
  backgroundColor?: string;
}

export const UseBackground = propMap<IUseBackground>([
  ['background', 'background'],
  ['backgroundColor', 'background-color'],
]);
