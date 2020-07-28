import React from 'react';
import NavItem from './common/NavItem';
import { GlobalProp } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import PopUpContainer from './common/PopUpContainer';
import ListItem from './common/ListItem';
import { formatDate } from 'components/utils/formatDate';

interface BuildInfoNavItemProps
  extends Pick<
    GlobalProp,
    'buildTime' | 'postCount' | 'tagCount' | 'categoryCount'
  > {}

const BuildInfoNavItem: React.FC<BuildInfoNavItemProps> = ({
  buildTime,
  postCount,
  tagCount,
  categoryCount,
}) => {
  const { isHover, hoverMouseEvent } = useMouseHover();

  return (
    <>
      <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
        빌드정보
        <PopUpContainer size='14rem' isShow={isHover}>
          <ListItem
            iconName='far fa-clock'
            name='최종 빌드'
            content={formatDate(buildTime)}
          />
          <ListItem
            iconName='far fa-copy'
            name='누적 게시물'
            content={`${postCount}개`}
          />
          <ListItem
            iconName='fas fa-tags'
            name='누적 태그'
            content={`${tagCount}개`}
          />
          <ListItem
            iconName='fas fa-sitemap'
            name='누적 카테고리'
            content={`${categoryCount}개`}
          />
        </PopUpContainer>
      </NavItem>
    </>
  );
};

export default React.memo(BuildInfoNavItem);
