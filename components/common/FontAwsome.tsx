import React from 'react';
import { styled } from 'components/typings/Theme';
import { IconSize } from 'components/typings/Theme';

interface FontAwsomeProps {
  iconName: string;
  size?: IconSize;
}

const FontAwsome: React.FC<FontAwsomeProps> = ({
  iconName,
  size = 'normal',
}) => {
  return <Icon aria-hidden className={iconName} size={size} />;
};

interface IconProps extends Pick<FontAwsomeProps, 'size'> {}

const Icon = styled.i<IconProps>`
  font-size: ${({ theme, size }) => theme.iconSize[size]};
`;

export default React.memo(FontAwsome);
