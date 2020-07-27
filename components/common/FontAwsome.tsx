import React from 'react';
import styled from 'styled-components';

interface FontAwsomeProps {
  iconName: string;
  size?: 'big' | 'small' | 'normal';
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
