import React from 'react';
import styled from 'styled-components';
import { IUseFont, UseFont } from 'components/styles/helpers';

interface FontAwsomeProps extends IUseFont {
  iconName: string;
}

const FontAwsome: React.FC<FontAwsomeProps> = ({ iconName, ...fontProps }) => {
  return <Icon aria-hidden className={iconName} {...fontProps} />;
};

const Icon = styled.i`
  ${UseFont}
`;

export default FontAwsome;
