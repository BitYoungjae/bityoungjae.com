import React from 'react';
import styled from 'styled-components';
import { IUseSize, UseSize } from 'components/styles/helpers';

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
  return <IconBox sizeWidth={width}>{children}</IconBox>;
};

const IconBox = styled.div<IUseSize>`
  display: flex;

  ${UseSize}

  justify-content: space-between;
  align-items: center;
`;

export default HeaderIconBox;
