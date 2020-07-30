import React, { useContext } from 'react';
import { FilledContext } from '.';
import Link from 'next/link';
import Logo from 'components/common/Logo';

const HeaderLogo: React.FC = () => {
  const isFilled = useContext(FilledContext);

  return (
    <Link href='/'>
      <a>
        <Logo
          logoColor={isFilled ? 'iconOnFilledHeader' : 'iconOnBackground'}
        />
      </a>
    </Link>
  );
};

export default React.memo(HeaderLogo);
