import { keyframes, css } from 'styled-components';

const padeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const padeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}`;

const bounce = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(-.3em);
}`;

export const fadeInAnimation = css`
  animation: ${padeIn} 0.3s alternate;
`;

export const fadeOutAnimation = css`
  animation: ${padeOut} 0.3s alternate;
`;

export const bounceAnimation = css`
  animation: ${bounce} 0.3s 0.1s infinite alternate;
`;
