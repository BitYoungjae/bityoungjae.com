import { IUseLink } from 'components/typings/common';
import { PropInfoNode } from './Tree';
import Link from 'next/link';
import { SpanWithFontStyle } from 'components/styles/alias';
import { PlainAnchor } from 'components/styles/plains';

export interface TreeItemProps extends IUseLink {
  node: PropInfoNode;
  NameView?: React.FC;
  CountView?: React.FC;
}

const TreeItem: React.FC<TreeItemProps> = ({
  node: { name, postCount, slug },
  linkProps,
  NameView = SpanWithFontStyle,
  CountView = SpanWithFontStyle,
}) => {
  return (
    <Link {...linkProps} as={`${linkProps.as}${slug}`}>
      <PlainAnchor>
        <NameView>{name}</NameView>
        <CountView>{postCount}</CountView>
      </PlainAnchor>
    </Link>
  );
};

export default TreeItem;
