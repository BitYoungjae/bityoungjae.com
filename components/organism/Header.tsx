import React from 'react';
import styled from 'styled-components';
import { GetProps } from '../typings/common';
import Link from 'next/link';

interface HeaderProps extends HeaderBoxProps {
  mainText: string;
  subText?: string;
  linkProps?: GetProps<Link>;
  texts?: {
    main?: MainTextProps;
    sub?: SubTextProps;
  };
}

const Header: React.FC<HeaderProps> = ({
  mainText,
  subText,
  fontSize,
  backgroundColor,
  texts = {},
  linkProps = { href: '/' },
}) => {
  const {
    main = {
      color: 'black',
      fontFamily: 'inherit',
      letterSpacing: '0.1em',
    },
    sub = {
      color: 'white',
      fontFamily: 'inherit',
      letterSpacing: 'normal',
    },
  } = texts;

  return (
    <HeaderBox backgroundColor={backgroundColor} fontSize={fontSize}>
      <Link {...linkProps}>
        <a>
          <MainText {...main}>{mainText}</MainText>
          {subText && <SubText {...sub}>{subText}</SubText>}
        </a>
      </Link>
    </HeaderBox>
  );
};

interface HeaderBoxProps {
  fontSize?: string;
  backgroundColor?: string;
}

const HeaderBox = styled.header<HeaderBoxProps>`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${({ fontSize = '1.8rem' }) => fontSize};

  height: 3em;
  overflow: hidden;

  background-color: ${({ backgroundColor = '#4291F7' }) => backgroundColor};

  position: relative;

  & a {
    text-decoration: none;
  }

  & p,
  h1 {
    position: relative;

    margin: 0;
    z-index: 2;
  }

  &::before,
  &::after {
    content: '';

    display: block;
    position: absolute;

    top: -40vw;
    left: 15vw;

    background-color: rgba(255, 255, 255, 0.13);

    font-size: inherit;

    width: 45vw;
    height: 100vw;

    z-index: 1;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    top: -75vw;
    left: 55vw;

    transform: rotate(36deg);
  }
`;

interface MainTextProps {
  fontFamily?: string;
  color?: string;
  letterSpacing?: string;
}
const MainText = styled.h1<MainTextProps>`
  font-size: inherit;
  font-family: ${({ fontFamily = 'inherit' }) => fontFamily};
  letter-spacing: ${({ letterSpacing = 'normal' }) => letterSpacing};

  color: ${({ color = 'black' }) => color};
`;

interface SubTextProps extends MainTextProps {}

const SubText = styled.p<SubTextProps>`
  font-size: 0.583em;
  font-family: ${({ fontFamily = 'inherit' }) => fontFamily};

  color: ${({ color = '#FFFFFF' }) => color};
`;

export default Header;
