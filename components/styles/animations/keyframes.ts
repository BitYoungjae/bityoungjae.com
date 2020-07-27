import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  from {
    transform: translate(0, 100%);
  } to {
    transform: translate(0, 0);
  }
`;

export const slideDown = keyframes`
  from {
    transform: translate(0, -100%);
  } to {
    transform: translate(0, 0);
  }
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
} to {
  opacity: 100%;
}
`;

export const fadeOut = keyframes`
from {
  opacity: 100%;
} to {
  opacity: 0%;
}
`;

export const slideUpAndFadeIn = keyframes`
from {
  opacity: 0;
  transform: translate(0, 100%);
}
to {
  opacity: 100%;
  transform: translate(0, 0);
}`;

export const slideDownAndFadeIn = keyframes`
from {
  opacity: 0;
  transform: translate(0, -100%);
}
to {
  opacity: 100%;
  transform: translate(0, 0);
}`;
