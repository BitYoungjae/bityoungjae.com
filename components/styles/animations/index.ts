import { css } from 'styled-components';
import { fadeIn, fadeOut, bounce, slideUp } from './keyframes';

export const fadeInAnimation = css`
  animation: ${fadeIn} 0.3s alternate;
`;

export const fadeOutAnimation = css`
  animation: ${fadeOut} 0.3s alternate;
`;

export const bounceAnimation = css`
  animation: ${bounce} 0.3s 0.1s infinite alternate;
`;

export const slideAnimation = {
  up: css`
    animation: ${slideUp} 0.5s 1 forwards;
  `,
};
