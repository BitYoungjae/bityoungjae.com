import React from 'react';
import styled from 'styled-components';

interface HeaderIconBoxProps {
  width: string;
}
const HeaderIconBox: React.FC<HeaderIconBoxProps> = ({ children, width }) => {
  return <IconBox width={width}>{children}</IconBox>;
};

const IconBox = styled.div<HeaderIconBoxProps>`
  display: flex;
  width: ${({ width }) => width};

  justify-content: space-between;
  align-items: center;
`;

export default HeaderIconBox;
