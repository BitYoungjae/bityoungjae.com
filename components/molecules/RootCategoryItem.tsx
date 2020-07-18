import React from 'react';
import TreeItem, { TreeItemProps } from '../atoms/TreeItem';
import RootNameView from 'components/atoms/RootNameView';
import RootCountView from 'components/atoms/RootCountView';
import { SiblingList, BetweenSiblingList } from 'components/styles/alias';
import styled from 'styled-components';
import FontAwsome from 'components/atoms/FontAwsome';

const RootCategoryItem: React.FC<TreeItemProps> = ({
  node,
  linkProps,
  isActive,
}) => {
  return (
    <BetweenSiblingList marginTop='.5rem'>
      <TreeItem
        linkProps={linkProps}
        node={node}
        NameView={RootNameView}
        CountView={RootCountView}
        isActive={isActive}
      />
      {isActive && (
        <FontAwsome
          iconName='fas fa-glasses'
          textColor='white'
          textSize='1.4rem'
        />
      )}
    </BetweenSiblingList>
  );
};

export default RootCategoryItem;
