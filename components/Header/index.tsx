import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { useScrollPercent } from 'components/hooks/useScrollPercent';
import OutLinkItem from './OutLinkItem';
import { GlobalProp } from 'poststore';
import NavItemLink from './common/NavItemLink';
import BuildInfoItem from './BuildInfoItem';
import TagNavItem from './TagNavItem';
import CategoryNavItem from './CategoryNavItem';
import { styled } from 'components/typings/Theme';

interface HeaderProps extends GlobalProp {}

const Header: React.FC<HeaderProps> = (globalProps) => {
  const { scrollPercent } = useScrollPercent();

  return (
    <Container type={scrollPercent > 1 ? 'filled' : undefined}>
      <Logo />
      <NavItemContainer>
        <NavItemLink href='/about' hasDropdown={false}>
          나에 대하여
        </NavItemLink>
        <CategoryNavItem categoryTree={globalProps.categoryTree} />
        <TagNavItem tagList={globalProps.tagList} />
        <BuildInfoItem {...globalProps} />
      </NavItemContainer>
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
    </Container>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItemContainer = styled(NavContainer)`
  margin: 0 auto 0 1rem;
`;

export default Header;
