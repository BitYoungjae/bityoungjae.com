import { Keyframes, css, keyframes } from 'styled-components';

export interface AnimationOptions {
  duration?: string;
  delay?: string;
  timingFunction?: string;
  iterationCount?: string;
  direction?: 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'forwards' | 'backwards' | 'both';
}

export interface AnimationProps {
  keyframe: Keyframes;
  option?: AnimationOptions;
}

export const makeAnimation = ({
  keyframe,
  option: {
    duration = '.5s',
    delay,
    timingFunction,
    fillMode,
    direction,
    iterationCount,
  },
}: AnimationProps) => {
  return css`
    animation: ${keyframe} ${duration} ${delay} ${iterationCount}
      ${timingFunction} ${fillMode} ${direction};
  `;
};
