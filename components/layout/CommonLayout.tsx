import React, { useContext } from 'react';
import Header from 'components/organism/Header';
import { textStyles, linkProps } from 'components/common/constants';
import styled from 'styled-components';
import { GlobalProp } from 'poststore';
import isEqual from 'lodash.isequal';
import { SiteContext } from 'pages/_app';
import MenuButton from 'components/atoms/MenuButton';
import MenuBox from 'components/atoms/MenuBox';
import CategoryNav from 'components/molecules/CategoryNav';
import TagsNav from 'components/molecules/TagsNav';
import Nav from 'components/organism/Nav';

interface CommmonLayoutProps
  extends Pick<GlobalProp, 'tagList' | 'categoryTree'> {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommmonLayoutProps> = ({
  categoryTree,
  tagList,
  children,
}) => {
  const siteContext = useContext(SiteContext);
  const { isMenuOpen, toggleMenu, isTabletOrMobile, isDesktop } = siteContext;
  return (
    <>
      <Header
        mainText='BITYOUNGJAE'
        subText='개발자하려고 퇴사했습니다'
        texts={textStyles.header}
        linkProps={linkProps.home}
        backgroundColor='#4291F7'
      />
      {isTabletOrMobile && (
        <>
          <MenuButton isOpen={isMenuOpen} onToggleMenu={toggleMenu} />
          <Nav
            isOpen={isMenuOpen}
            isMobile={true}
            categoryTree={categoryTree}
            tagList={tagList}
          />
          {children}
        </>
      )}
      {isDesktop && (
        <MainContainer>
          <NavSection>
            <Nav
              isOpen={true}
              isMobile={false}
              categoryTree={categoryTree}
              tagList={tagList}
            />
          </NavSection>
          <MainSection>{children}</MainSection>
        </MainContainer>
      )}
    </>
  );
};

const MainContainer = styled.main`
  width: 50vw;
  padding-top: 0.5rem;

  display: flex;
  justify-content: space-around;

  margin: 0 auto;
`;

const NavSection = styled.section`
  min-width: 20rem;
  width: 20vw;
`;

const MainSection = styled.section`
  padding: 0 1vw;
  flex-basis: 50%;
  flex-grow: 1;
`;

export const Main = styled.section`
  padding: 0.8rem 0.5rem;
`;

export const Footer = styled.footer`
  padding: 0 0.5rem;
`;

export default React.memo(CommonLayout, (prevProps, nextProps) => {
  const eqCategoryTree = isEqual(
    prevProps.categoryTree,
    nextProps.categoryTree,
  );
  const eqTagList = isEqual(prevProps.tagList, nextProps.tagList);
  const eqChildren = prevProps.children === nextProps.children;

  return eqCategoryTree && eqTagList && eqChildren;
});
