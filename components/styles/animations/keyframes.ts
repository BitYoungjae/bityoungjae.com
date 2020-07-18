import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

export const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}`;

export const bounce = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(-.3em);
}`;

export const slideUp = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}`;
