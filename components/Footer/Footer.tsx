import React from 'react';
import { styled } from 'components/styles/themes/types';
import Logo from 'components/common/Logo';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo logoColor='white' />
      <CopyRight>© 2020 BitYoungjae Powered by PostStore</CopyRight>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  font-size: 0.9rem;
  color: white;
  letter-spacing: 0.1em;

  margin-top: 1.5rem;

  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const CopyRight = styled.p`
  margin-top: 0.4rem;
`;

export default Footer;
