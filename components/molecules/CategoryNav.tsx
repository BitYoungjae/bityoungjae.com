import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import isEqual from 'lodash.isequal';
import type { GetProps } from '../typings/common';
import type { GlobalProp } from 'poststore';
import { PlainList } from 'components/common/base';

interface CategoryNavProps {
  categoryTree: GlobalProp['categoryTree'];
  linkProps: GetProps<Link>;
  ListComponent?: typeof PlainList;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  categoryTree,
  linkProps,
  ListComponent = PlainList,
}) => {
  return (
    <>
      <ListComponent>
        {categoryTree.children &&
          categoryTree.children.map((child) => {
            const { name, postCount, slug, children } = child;

            return (
              <>
                <CategoryItem key={slug} slug={slug} linkProps={linkProps}>
                  {name + ' ' + postCount}
                </CategoryItem>
                {children && (
                  <CategoryNav
                    key={`sub_${slug}`}
                    categoryTree={child}
                    ListComponent={SubCategoryList}
                    linkProps={{
                      ...linkProps,
                      as: `${linkProps.as}${slug}/`,
                    }}
                  />
                )}
              </>
            );
          })}
      </ListComponent>
    </>
  );
};

interface CategoryItemProps {
  slug: string;
  linkProps: GetProps<Link>;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  slug,
  linkProps,
  children,
}) => {
  return (
    <Link {...linkProps} as={`${linkProps.as}${slug}`}>
      <a>
        <ListItem>{children}</ListItem>
      </a>
    </Link>
  );
};

const SubCategoryList = styled(PlainList)`
  width: 90%;
  background-color: gray;
`;

const ListItem = styled.li``;

export default React.memo(CategoryNav, (prevProps, nextProps) => {
  const isSame =
    prevProps.ListComponent === nextProps.ListComponent &&
    prevProps.linkProps === nextProps.linkProps &&
    isEqual(prevProps.categoryTree, nextProps.categoryTree);

  return isSame;
});
