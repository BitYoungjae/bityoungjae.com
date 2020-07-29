import React from 'react';
import NavItem from '../common/NavItem';
import SubNavContainer from '../common/SubNavContainer';
import SubNavList from '../common/SubNavList';
import SubNavItem from '../common/SubNavItem';
import { GlobalProp } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { postInfoSort } from '../common/postInfoSort';

interface TagNavProps {
  tagList: GlobalProp['tagList'];
}

const TagNav: React.FC<TagNavProps> = ({ tagList }) => {
  const { isHover, hoverMouseEvent } = useMouseHover();
  const sortedTagList = tagList.sort(postInfoSort);

  return (
    <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
      태그
      <SubNavContainer isHide={!isHover}>
        <SubNavList>
          {sortedTagList.map(({ name, postCount, slug }) => {
            return (
              <SubNavItem key={slug} name={name} content={`${postCount}`} />
            );
          })}
        </SubNavList>
      </SubNavContainer>
    </NavItem>
  );
};

export default TagNav;
