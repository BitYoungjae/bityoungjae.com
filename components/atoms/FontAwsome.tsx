import React from 'react';
import styled from 'styled-components';
import {
  IUseFont,
  UseFont,
  IUseTextAlign,
  UseTextAlign,
} from 'components/styles/helpers';

interface FontAwsomeProps extends IUseFont, IUseTextAlign {
  iconName: string;
}

const FontAwsome: React.FC<FontAwsomeProps> = ({ iconName, ...fontProps }) => {
  return <Icon aria-hidden className={iconName} {...fontProps} />;
};

const Icon = styled.i<IUseTextAlign & IUseFont>`
  ${UseFont}
  ${UseTextAlign}
`;

export default React.memo(FontAwsome);
