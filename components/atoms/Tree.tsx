import React from 'react';
import Link from 'next/link';
import isEqual from 'lodash.isequal';
import type { IUseLink } from '../typings/common';
import type { PropInfoNode } from 'poststore';
import { PlainList } from 'components/styles/plains';

interface TreeProps extends IUseLink {
  rootNode: PropInfoNode;
  ContainerView?: React.FC;
  SubContainerView?: React.FC;
  TreeItem?: React.FC<TreeItemProps>;
  SubTreeItem?: React.FC<TreeItemProps>;
}

const Tree: React.FC<TreeProps> = ({
  rootNode,
  linkProps,
  ContainerView = PlainList,
  SubContainerView = PlainList,
  TreeItem = DefaultItem,
  SubTreeItem = DefaultItem,
}) => {
  return (
    <ContainerView>
      {rootNode.children &&
        rootNode.children.map((childNode) => {
          const { slug, children } = childNode;
          return (
            <React.Fragment key={slug}>
              <TreeItem node={childNode} linkProps={linkProps} />
              {children && (
                <Tree
                  rootNode={childNode}
                  linkProps={{
                    ...linkProps,
                    as: `${linkProps.as}${slug}/`,
                  }}
                  ContainerView={SubContainerView}
                  TreeItem={SubTreeItem}
                />
              )}
            </React.Fragment>
          );
        })}
    </ContainerView>
  );
};

export interface TreeItemProps extends IUseLink {
  node: PropInfoNode;
}

const DefaultItem: React.FC<TreeItemProps> = ({
  node: { name, slug, postCount },
  linkProps,
}) => {
  return (
    <li>
      <Link {...linkProps} as={`${linkProps.as}${slug}`}>
        <a>{`${name} (${postCount})`}</a>
      </Link>
    </li>
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
