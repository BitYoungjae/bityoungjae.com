import {
  slideUp,
  slideDown,
  fadeIn,
  fadeOut,
  slideUpAndFadeIn,
  slideDownAndFadeIn,
} from './keyframes';
import { makeAnimation, AnimationOptions } from './utils';

const forwardOption: AnimationOptions = {
  duration: '.5s',
  fillMode: 'forwards',
};

export const Slide = {
  up: makeAnimation({ keyframe: slideUp, option: forwardOption }),
  down: makeAnimation({ keyframe: slideDown, option: forwardOption }),
};

export const Fade = {
  in: makeAnimation({ keyframe: fadeIn, option: forwardOption }),
  out: makeAnimation({ keyframe: fadeOut, option: forwardOption }),
};

export const SlideAndFade = {
  upAndIn: makeAnimation({ keyframe: slideUpAndFadeIn, option: forwardOption }),
  downAndIn: makeAnimation({
    keyframe: slideDownAndFadeIn,
    option: forwardOption,
  }),
};
