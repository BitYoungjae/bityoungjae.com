import styled, { css } from 'styled-components';
import {
  IUseFont,
  UseFont,
  IUseTextAlign,
  IUseTextSpacing,
  UseTextSpacing,
  UseTextAlign,
  IUseMargin,
  UseMargin,
} from './helpers';
import { Flex } from './flex';

export const SpanWithFontStyle = styled.span<
  IUseFont & IUseTextAlign & IUseTextSpacing
>`
  ${UseFont}
  ${UseTextAlign}
  ${UseTextSpacing}
`;

export const CircleStyle = css`
  ${Flex.center}
  border-radius: 50%;
`;

export const SiblingList = styled.li<IUseMargin>`
  & + & {
    ${UseMargin}
  }
`;
