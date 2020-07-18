import React from 'react';
import styled from 'styled-components';
import { IUseLink } from '../typings/common';
import Link from 'next/link';
import HeaderInfoBox from 'components/molecules/HeaderInfoBox';
import JobSearchInfo from 'components/atoms/JobSearchInfo';
import FontAwsomeLink from 'components/molecules/FontAwsomeLink';
import HeaderIconBox from 'components/molecules/HeaderIconBox';
import { links } from '../../SiteMeta.json';

interface HeaderProps extends HeaderBoxProps, IUseLink {
  mainText: string;
  subText?: string;
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
      <HeaderInfoBox>
        <JobSearchInfo />
        <HeaderIconBox count={3} fontSize='2.3rem' padding='1rem'>
          <FontAwsomeLink
            iconName='fab fa-twitter-square'
            color='white'
            textSize='2.3rem'
            href={links.twitter}
          />
          <FontAwsomeLink
            iconName='fab fa-github'
            color='white'
            textSize='2.3rem'
            href={links.github}
          />
          <FontAwsomeLink
            iconName='fas fa-envelope'
            color='white'
            textSize='2.3rem'
            href={links.email}
          />
        </HeaderIconBox>
      </HeaderInfoBox>
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

  height: 4.7em;
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

export default React.memo(Header);
