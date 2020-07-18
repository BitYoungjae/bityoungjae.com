import { css } from 'styled-components';

export const setCssProp = <T>(propName: keyof T, stylePropName: string) => (
  props: T,
) =>
  props[propName] &&
  css`
    ${`${stylePropName}: ${propName}`}
  `;

export const propMap = <T>(entries: [keyof T, string][]) => (
  defaultProps?: T,
) => (props: T) => {
  const style = entries.reduce((acc, [propName, stylePropName]) => {
    let propValue: T[keyof T] = props[propName];

    if (defaultProps) {
      const defaultValue = defaultProps[propName];
      propValue =
        defaultValue && !props[propName] ? defaultValue : props[propName];
    }

    if (!propValue) return acc;
    return (acc = acc + `${stylePropName}: ${propValue};`);
  }, '');

  return css`
    ${style}
  `;
};
