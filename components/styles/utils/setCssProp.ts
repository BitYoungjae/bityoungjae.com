import { css } from 'styled-components';

export const setCssProp = <T>(propName: keyof T, stylePropName: string) => (
  props: T,
) =>
  props[propName] &&
  css`
    ${`${stylePropName}: ${propName}`}
  `;

export const propMap = <T>(entries: [keyof T, string][]) => (props: T) => {
  const style = entries.reduce((acc, [propName, stylePropName]) => {
    const propValue = props[propName];
    if (!propValue) return acc;
    return (acc = acc + `${stylePropName}: ${propValue};`);
  }, '');

  return css`
    ${style}
  `;
};
