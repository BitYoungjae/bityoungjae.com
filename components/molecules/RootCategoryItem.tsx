import React from 'react';
import TreeItem, { TreeItemProps } from '../atoms/TreeItem';
import RootNameView from 'components/atoms/RootNameView';
import RootCountView from 'components/atoms/RootCountView';
import { SiblingList } from 'components/styles/alias';

const RootCategoryItem: React.FC<TreeItemProps> = ({ node, linkProps }) => {
  return (
    <SiblingList marginTop='.5rem'>
      <TreeItem
        linkProps={linkProps}
        node={node}
        NameView={RootNameView}
        CountView={RootCountView}
      />
    </SiblingList>
  );
};

export default RootCategoryItem;
