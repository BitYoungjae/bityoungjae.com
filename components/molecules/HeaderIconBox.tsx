import React from 'react';
import styled from 'styled-components';

interface HeaderIconBoxProps {
  count: number;
  fontSize?: string;
  padding?: string;
}
const HeaderIconBox: React.FC<HeaderIconBoxProps> = ({
  count,
  fontSize = '1rem',
  padding = '1rem',
  children,
}) => {
  const width = `calc(${fontSize} * ${count} + ${padding})`;
  return <IconBox width={width}>{children}</IconBox>;
};

interface IconBoxProps {
  width: string;
}

const IconBox = styled.div<IconBoxProps>`
  display: flex;
  width: ${({ width }) => width};

  justify-content: space-between;
  align-items: center;
`;

export default HeaderIconBox;
