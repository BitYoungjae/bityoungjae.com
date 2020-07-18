import React from 'react';
import { IUseLink } from 'components/typings/common';
import { PropInfoNode } from './Tree';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SpanWithFontStyle } from 'components/styles/alias';
import { PlainAnchor } from 'components/styles/plains';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';

export interface TreeItemProps extends IUseLink {
  node: PropInfoNode;
  isActive?: boolean;
  NameView?: React.FC<ItemViewProps>;
  CountView?: React.FC<ItemViewProps>;
}

export interface ItemViewProps {
  isActive?: boolean;
}

const TreeItem: React.FC<TreeItemProps> = ({
  node: { name, postCount, slug },
  linkProps,
  isActive,
  NameView = SpanWithFontStyle,
  CountView = SpanWithFontStyle,
}) => {
  return (
    <Link {...linkProps} as={`${linkProps.as}${slug}`}>
      <AnchorWithCursor>
        <NameView isActive={isActive}>{name}</NameView>
        <CountView isActive={isActive}>{postCount}</CountView>
      </AnchorWithCursor>
    </Link>
  );
};

const AnchorWithCursor = styled(PlainAnchor)`
  cursor: pointer;
`;

export default TreeItem;
