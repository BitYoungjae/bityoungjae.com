import React from 'react';
import { styled, ColorList } from 'components/styles/themes/types';
import { IconSize } from 'components/styles/themes/types';

interface FontAwsomeProps {
  iconName: string;
  size?: IconSize;
  color?: ColorList;
}

const FontAwsome: React.FC<FontAwsomeProps> = ({
  iconName,
  color,
  size = 'normal',
}) => {
  return <Icon aria-hidden className={iconName} size={size} color={color} />;
};

interface IconProps extends Pick<FontAwsomeProps, 'size' | 'color'> {}

const Icon = styled.i<IconProps>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};
  font-size: ${({ theme, size }) => theme.iconSize[size]};
`;

export default React.memo(FontAwsome);
