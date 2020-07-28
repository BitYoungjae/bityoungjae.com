import React from 'react';
import NavItem from '../common/NavItem';
import { GlobalProp } from 'poststore';
import HideableContainer from 'components/Header/common/HideableContainer';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { styled } from 'components/typings/Theme';
import PopUpContainer from '../common/PopUpContainer';
import ListItemBox from '../common/ListItemBox';
import PlainListItem from '../common/PlainListItem';

interface TagNavItemProps {
  tagList: GlobalProp['tagList'];
}

const TagNavItem: React.FC<TagNavItemProps> = ({ tagList }) => {
  const { isHover, hoverMouseEvent } = useMouseHover();
  const sortedTagList = tagList.sort(
    (aTag, bTag) => bTag.postCount - aTag.postCount,
  );

  return (
    <>
      <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
        태그
        {isHover && (
          <HideableContainer>
            <ListContainer>
              {sortedTagList.map(({ name, postCount, slug }) => {
                return (
                  <PlainListItem
                    key={slug}
                    name={name}
                    content={`${postCount}`}
                  />
                );
              })}
            </ListContainer>
          </HideableContainer>
        )}
      </NavItem>
    </>
  );
};

const ListContainer = styled(PopUpContainer)`
  width: 10rem;
`;

export default TagNavItem;
