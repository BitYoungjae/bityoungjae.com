import React from 'react';
import Logo from './Logo';
import HeaderContainer from './HeaderContainer';
import CategoryNav from './CategoryNav';
import TagNav from './TagNav';
import BuildInfoNavItem from './BuildInfoNav';
import NavItemLink from './common/NavItemLink';
import OutLinkItem from './OutLinkItem';
import { useScrollPercent } from 'components/hooks/useScrollPercent';
import { GlobalProp } from 'poststore';
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
    <HeaderContainer type={scrollPercent > 1 ? 'filled' : undefined}>
      <Logo />
      <NavItemContainer>
        <NavItemLink href='/about' hasDropdown={false}>
          나에 대하여
        </NavItemLink>
        <CategoryNav rootCategoryNode={categoryTree} />
        <TagNav tagList={tagList} />
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
    </HeaderContainer>
  );
};

const NavContainer = styled.nav`
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
