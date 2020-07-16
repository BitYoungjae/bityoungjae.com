import React from 'react';
import FontAwsome from '../atoms/FontAwsome';
import { GetProps } from '../typings/common';
import styled, { keyframes } from 'styled-components';

interface FontAwsomeLinkProps extends GetProps<typeof FontAwsome> {
  href: string;
}

const FontAwsomeLink: React.FC<FontAwsomeLinkProps> = ({
  href,
  ...fontAwsomeProps
}) => {
  return (
    <AnimatedAnchor href={href}>
      <FontAwsome {...fontAwsomeProps} />
    </AnimatedAnchor>
  );
};

const bounce = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(-.3em);
}`;

const AnimatedAnchor = styled.a`
  &:hover {
    animation: ${bounce} 0.3s 0.1s infinite alternate;
  }
`;

export default FontAwsomeLink;
