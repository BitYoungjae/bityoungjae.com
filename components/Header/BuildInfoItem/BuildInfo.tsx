import React from 'react';
import { GlobalProp } from 'poststore';
import { formatDate } from 'components/utils/formatDate';
import PopUpContainer from '../common/PopUpContainer';
import ListItem from '../common/ListItem';

interface BuildInfoProps extends GlobalProp {}

const BuildInfo: React.FC<BuildInfoProps> = ({
  buildTime,
  postCount,
  tagCount,
  categoryCount,
}) => {
  return (
    <PopUpContainer>
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
  );
};

export default BuildInfo;
