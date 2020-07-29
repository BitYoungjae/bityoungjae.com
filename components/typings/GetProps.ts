import React from 'react';
import { StyledComponent } from 'styled-components';

export type GetProps<T> = T extends React.FC<infer R>
  ? R
  : T extends React.Component<infer U>
  ? U
  : never;

export type GetPropsFromStyledComponent<T> = T extends StyledComponent<
  any,
  any,
  infer R,
  any
>
  ? R
  : never;
