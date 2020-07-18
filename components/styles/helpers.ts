import { css } from 'styled-components';
import { propMap } from './utils/setCssProp';

export interface IUseFont {
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}

export const UseFont = propMap<IUseFont>([
  ['fontFamily', 'font-family'],
  ['fontSize', 'font-size'],
  ['fontWeight', 'font-weight'],
  ['color', 'color'],
]);

export interface IUseTextSpacing {
  letterSpacing?: string;
  wordSpacing?: string;
}

export const UseTextSpacing = css<IUseTextSpacing>`
  ${propMap<IUseTextSpacing>([
    ['letterSpacing', 'letter-spacing'],
    ['wordSpacing', 'word-spacing'],
  ])}
`;
