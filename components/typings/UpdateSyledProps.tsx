import { StyledComponent } from 'styled-components';

export type UpdateStyledProps<T, U extends Object> = T extends StyledComponent<
  infer R,
  infer T,
  infer O
>
  ? StyledComponent<R, T, U & O, never>
  : never;
