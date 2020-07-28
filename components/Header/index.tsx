import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { useScrollPercent } from 'components/hooks/useScrollPercent';
import OutLinkItem from './OutLinkItem';
import { GlobalProp } from 'poststore';
import NavItemLink from './common/NavItemLink';
import BuildInfoNavItem from './BuildInfoNavItem';
import TagNavItem from './TagNavItem';
import CategoryNavItem from './CategoryNavItem';
import { styled } from 'components/typings/Theme';

interface HeaderProps extends GlobalProp {}

const Header: React.FC<HeaderProps> = ({
  categoryTree,
  tagList,
  buildTime,
  categoryCount,
  tagCount,
  postCount,
}) => {
  const { scrollPercent } = useScrollPercent();

  return (
    <Container type={scrollPercent > 1 ? 'filled' : undefined}>
      <Logo />
      <NavItemContainer>
        <NavItemLink href='/about' hasDropdown={false}>
          나에 대하여
        </NavItemLink>
        <CategoryNavItem categoryTree={categoryTree} />
        <TagNavItem tagList={tagList} />
        <BuildInfoNavItem
          buildTime={buildTime}
          categoryCount={categoryCount}
          tagCount={tagCount}
          postCount={postCount}
        />
      </NavItemContainer>
      <OutLinkContainer>
        <OutLinkItem
          iconName='fab fa-github'
          color='blue'
          size='big'
          href='https://github.com/BitYoungjae'
        />
        <OutLinkItem
          iconName='fas fa-envelope'
          color='blue'
          size='big'
          href='mailto:bityoungjae@gmail.com'
        />
      </OutLinkContainer>
    </Container>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItemContainer = styled(NavContainer)`
  flex-shrink: 0;
  margin: 0 auto 0 1rem;
`;

const OutLinkContainer = styled(NavContainer)`
  margin-left: 1rem;
`;

export default Header;
