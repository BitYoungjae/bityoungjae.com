import React from 'react';
import isEqual from 'lodash.isequal';
import type { IUseLink } from '../typings/common';
import type { PropInfoNode } from 'poststore';
import { PlainList } from 'components/styles/plains';
import TreeItem, { TreeItemProps } from './TreeItem';

interface TreeProps extends IUseLink {
  rootNode: PropInfoNode;
  ContainerView?: React.FC;
  SubContainerView?: React.FC;
  RootTreeItem?: React.FC<TreeItemProps>;
  SubTreeItem?: React.FC<TreeItemProps>;
}

const Tree: React.FC<TreeProps> = ({
  rootNode,
  linkProps,
  ContainerView = PlainList,
  SubContainerView = PlainList,
  RootTreeItem = TreeItem,
  SubTreeItem = TreeItem,
}) => {
  return (
    <ContainerView>
      {rootNode.children &&
        rootNode.children.map((childNode) => {
          const { slug, children } = childNode;
          return (
            <React.Fragment key={slug}>
              <RootTreeItem node={childNode} linkProps={linkProps} />
              {children && (
                <Tree
                  rootNode={childNode}
                  linkProps={{
                    ...linkProps,
                    as: `${linkProps.as}${slug}/`,
                  }}
                  ContainerView={SubContainerView}
                  RootTreeItem={SubTreeItem}
                />
              )}
            </React.Fragment>
          );
        })}
    </ContainerView>
  );
};

export type { PropInfoNode };

export default React.memo(Tree, (prevProps, nextProps) => {
  const [
    { rootNode: prevNode, children: prevChildren, ...prevRestProps },
    { rootNode: nextNode, children: nextChildren, ...nextRestProps },
  ] = [prevProps, nextProps];
  const isSame =
    isEqual(prevRestProps, nextRestProps) && isEqual(prevNode, nextNode);

  return isSame;
});
