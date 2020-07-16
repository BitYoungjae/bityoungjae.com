import React from 'react';
import styled from 'styled-components';

interface FontAwsomeProps {
  iconName: string;
  color?: string;
  fontSize?: string;
}

const FontAwsome: React.FC<FontAwsomeProps> = ({
  iconName,
  color = 'inherit',
  fontSize = 'inherit',
}) => {
  return <Icon className={iconName} color={color} fontSize={fontSize} />;
};

interface IconProps {
  color: string;
  fontSize: string;
}

const Icon = styled.i<IconProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

export default FontAwsome;
