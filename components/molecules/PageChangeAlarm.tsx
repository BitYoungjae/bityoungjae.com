import React from 'react';
import styled, { keyframes } from 'styled-components';

interface PageChangeAlaramProps {
  currentPage: number;
}

const PageChangeAlaram: React.FC<PageChangeAlaramProps> = ({ currentPage }) => {
  return <PopUpBox>{`${currentPage} 페이지`}</PopUpBox>;
};

const padeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const PopUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 10em;
  height: 2em;

  background-color: rgba(0, 0, 0, 0.5);

  color: white;
  font-size: 3rem;
  font-weight: bold;

  animation: ${padeIn} 0.5s alternate;

  border-radius: 3em;
`;

export default PageChangeAlaram;