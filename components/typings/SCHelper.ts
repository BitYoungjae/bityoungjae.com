import { StyledComponent } from 'styled-components';

export type UpdateStyledProps<T, U extends Object> = T extends StyledComponent<
  infer R,
  infer T,
  infer O
>
  ? StyledComponent<R, T, U & O, never>
  : never;

export type GetComponentTypeOfStyledComponent<T> = T extends StyledComponent<
  infer C,
  any,
  any,
  any
>
  ? C
  : never;

export type GetDOMAttributeFromStyledComponent<
  T,
  C = GetComponentTypeOfStyledComponent<T>
> = C extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[C] : never;
