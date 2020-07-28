import React from 'react';
import Link from 'next/link';
import { styled } from 'components/typings/Theme';

const Logo: React.FC = () => {
  return (
    <Link href='/index' as='/'>
      <a>
        <LogoImage src='/logo.svg' />
      </a>
    </Link>
  );
};

const LogoImage = styled.img`
  height: ${(props) => props.theme.logoSize};
`;

export default Logo;
