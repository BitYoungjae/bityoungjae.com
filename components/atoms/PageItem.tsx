import styled, { css } from 'styled-components';

interface PageItemProps {
  isActive?: boolean;
  fontColor?: string;
  buttonColor?: string;
}

const PageItem = styled.li<PageItemProps>`
  & a {
    font-size: inherit;
    font-weight: bold;

    width: 2em;
    height: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #95a5a6;

    ${({ isActive = false, buttonColor }) =>
      activeStyle(isActive, buttonColor, 'white')};

    border-radius: 0.4em;
    text-decoration: none;

    box-sizing: border-box;
    transition: color 0.2s;
  }
`;

export default PageItem;

const activeStyle = (
  isActive: boolean,
  buttonColor: string,
  color: string = 'white',
) =>
  isActive
    ? css`
        background-color: ${buttonColor};
        color: ${color};
      `
    : css`
        &:hover {
          color: ${buttonColor};
        }
      `;
