import React from 'react';
import FontAwsome from '../atoms/FontAwsome';
import { GetProps } from '../typings/common';
import styled from 'styled-components';
import { bounceAnimation } from 'components/styles/animations';

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

const AnimatedAnchor = styled.a`
  &:hover {
    ${bounceAnimation}
  }
`;

export default FontAwsomeLink;
