import React from 'react';
import TreeItem, { TreeItemProps } from '../atoms/TreeItem';
import SubNameView from 'components/atoms/SubNameView';
import SubCountView from 'components/atoms/SubCountView';
import { BetweenSiblingList } from 'components/styles/alias';
import FontAwsome from 'components/atoms/FontAwsome';

const SubCategoryItem: React.FC<TreeItemProps> = ({
  node,
  linkProps,
  isActive,
}) => {
  return (
    <BetweenSiblingList marginTop='.5em'>
      <TreeItem
        linkProps={linkProps}
        node={node}
        NameView={SubNameView}
        CountView={SubCountView}
        isActive={isActive}
      />
      {isActive && (
        <FontAwsome
          iconName='fas fa-glasses'
          textColor='rgba(0, 0, 0, .7)'
          textSize='1.4rem'
        />
      )}
    </BetweenSiblingList>
  );
};

export default SubCategoryItem;
