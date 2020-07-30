import React from 'react';
import HeaderContainer from './HeaderContainer';
import CategoryNav from './CategoryNav';
import TagNav from './TagNav';
import BuildInfoNavItem from './BuildInfoNav';
import NavItemLink from './common/NavItemLink';
import OutLinkItem from './OutLinkItem';
import { GlobalProp } from 'poststore';
import { styled } from 'components/typings/Theme';
import HeaderLogo from './HeaderLogo';
import { useScrollOverElement } from 'components/hooks/useScrollOverElement';
import FontAwsome from 'components/common/FontAwsome';
import ThemeChangeButton from './ThemeChangeButton';

export const FilledContext = React.createContext(false);

interface HeaderProps extends GlobalProp {}

const Header: React.FC<HeaderProps> = ({
  categoryTree,
  tagList,
  buildTime,
  categoryCount,
  tagCount,
  postCount,
}) => {
  const { isOver, targetElementRef } = useScrollOverElement();

  return (
    <HeaderContainer isFilled={isOver} ref={targetElementRef}>
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
`;

const OutLinkContainer = styled(NavContainer)`
  margin-left: 1rem;
`;

export default Header;
