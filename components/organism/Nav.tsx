import React from 'react';
import MenuBox from 'components/atoms/MenuBox';
import CategoryNav from 'components/molecules/CategoryNav';
import { linkProps } from 'components/common/constants';
import TagsNav from 'components/molecules/TagsNav';
import { GlobalProp } from 'poststore';

interface NavProps extends Pick<GlobalProp, 'categoryTree' | 'tagList'> {
  isOpen: boolean;
  isMobile: boolean;
}

const Nav: React.FC<NavProps> = ({
  isOpen,
  isMobile,
  categoryTree,
  tagList,
}) => {
  return (
    isOpen && (
      <MenuBox isMobile={isMobile}>
        <CategoryNav
          categoryTree={categoryTree}
          linkProps={linkProps.category}
        />
        <TagsNav tagList={tagList} linkProps={linkProps.tag} />
      </MenuBox>
    )
  );
};

export default Nav;
