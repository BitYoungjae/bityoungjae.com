import React, { MutableRefObject } from 'react';
import HeaderContainer from './HeaderContainer';
import CategoryNav from './CategoryNav';
import TagNav from './TagNav';
import BuildInfoNavItem from './BuildInfoNav';
import NavItemLink from './common/NavItemLink';
import OutLinkItem from './OutLinkItem';
import { GlobalProp } from 'poststore';
import { styled, css } from 'components/styles/themes/types';
import HeaderLogo from './HeaderLogo';
import { useScrollOverElement } from 'components/hooks/useScrollOverElement';
import ThemeChangeButton from './ThemeChangeButton';
import { useMediaQuery } from 'react-responsive';
import FixedContainer from './FixedContainer';

export const FilledContext = React.createContext(false);

interface HeaderProps {
  globalProp: GlobalProp;
}

const Header: React.FC<HeaderProps> = ({
  globalProp: {
    categoryTree,
    tagList,
    buildTime,
    categoryCount,
    tagCount,
    postCount,
  },
}) => {
  const { isOver } = useScrollOverElement();

  return (
    <FixedContainer isFilled={isOver}>
      <HeaderContainer>
        <FilledContext.Provider value={isOver}>
          <HeaderLogo />
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
            <ThemeChangeButton />
            <OutLinkItem
              iconName='fab fa-github'
              href='https://github.com/BitYoungjae'
            />
            <OutLinkItem
              iconName='fas fa-envelope'
              href='mailto:bityoungjae@gmail.com'
            />
          </OutLinkContainer>
        </FilledContext.Provider>
      </HeaderContainer>
    </FixedContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItemContainer = styled(NavContainer)`
  flex-shrink: 0;
  margin: 0 auto 0 1rem;

  @media screen and (max-width: 1224px) {
    display: none;
  }
`;

const OutLinkContainer = styled(NavContainer)`
  margin: 0;
  margin-left: 1rem;
`;

export default Header;
