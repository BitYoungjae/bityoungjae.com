import React from 'react';
import { styled } from 'components/typings/Theme';

const Hero: React.FC = () => {
  return <HeroBox />;
};

const HeroBox = styled.div`
  background: url('/hero.jpg');
  background-size: cover;

  width: 100vw;
  height: 90vh;
`;

export default Hero;
