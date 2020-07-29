import React from 'react';
import NavItem from '../common/NavItem';
import SubNavContainer from '../common/SubNavContainer';
import SubNavIconItem from '../common/SubNavIconItem';
import { GlobalProp } from 'poststore';
import { useMouseHover } from 'components/hooks/useMouseHover';
import { formatDate } from 'components/utils/formatDate';
import SubNavList from '../common/SubNavList';

interface BuildInfoNavProps
  extends Pick<
    GlobalProp,
    'buildTime' | 'postCount' | 'tagCount' | 'categoryCount'
  > {}

const BuildInfoNav: React.FC<BuildInfoNavProps> = ({
  buildTime,
  postCount,
  tagCount,
  categoryCount,
}) => {
  const { isHover, hoverMouseEvent } = useMouseHover();

  return (
    <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
      빌드정보
      <SubNavContainer isHide={!isHover}>
        <SubNavList>
          <SubNavIconItem
            iconName='far fa-clock'
            name='최종 빌드'
            content={formatDate(buildTime)}
          />
          <SubNavIconItem
            iconName='far fa-copy'
            name='누적 게시물'
            content={`${postCount}개`}
          />
          <SubNavIconItem
            iconName='fas fa-tags'
            name='누적 태그'
            content={`${tagCount}개`}
          />
          <SubNavIconItem
            iconName='fas fa-sitemap'
            name='누적 카테고리'
            content={`${categoryCount}개`}
          />
        </SubNavList>
      </SubNavContainer>
    </NavItem>
  );
};

export default React.memo(BuildInfoNav);
