import React from 'react';
import TreeItem, { TreeItemProps } from '../atoms/TreeItem';
import SubNameView from 'components/atoms/SubNameView';
import SubCountView from 'components/atoms/SubCountView';
import { SiblingList } from 'components/styles/alias';

const SubCategoryItem: React.FC<TreeItemProps> = ({ node, linkProps }) => {
  return (
    <SiblingList marginTop='.5em'>
      <TreeItem
        linkProps={linkProps}
        node={node}
        NameView={SubNameView}
        CountView={SubCountView}
      />
    </SiblingList>
  );
};

export default SubCategoryItem;
