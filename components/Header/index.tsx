import React from 'react';
import Container from './Container';
import InnerContainer from './InnerContainer';
import Logo from './Logo';
import NavContainer from './NavContainer';
import { useScrollPercent } from 'components/hooks/useScrollPercent';
import RightContainer from './RightContainer';
import OutLinkItem from './OutLinkItem';
import { GlobalProp } from 'poststore';
import NavItemLink from './common/NavItemLink';
import BuildInfoItem from './BuildInfoItem';
import TagNavItem from './TagNavItem';
import CategoryNavItem from './CategoryNavItem';

interface HeaderProps extends GlobalProp {}

const Header: React.FC<HeaderProps> = (globalProps) => {
  const { scrollPercent } = useScrollPercent();

  return (
    <Container type={scrollPercent > 1 ? 'filled' : undefined}>
      <InnerContainer>
        <Logo />
        <RightContainer>
          <NavContainer>
            <NavItemLink href='/about' hasDropdown={false}>
              나에 대하여
            </NavItemLink>
            <CategoryNavItem categoryTree={globalProps.categoryTree} />
            <TagNavItem tagList={globalProps.tagList} />
            <BuildInfoItem {...globalProps} />
          </NavContainer>
          <NavContainer>
            <OutLinkItem
              iconName='fab fa-github'
              size='big'
              href='https://github.com/BitYoungjae'
            />
            <OutLinkItem
              iconName='fas fa-envelope'
              size='big'
              href='mailto:bityoungjae@gmail.com'
            />
          </NavContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;
