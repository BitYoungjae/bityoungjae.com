import React from 'react';
import Tree, { PropInfoNode } from '../atoms/Tree';
import { IUseLink } from 'components/typings/common';
import styled from 'styled-components';
import { PlainList } from 'components/styles/plains';
import RootCategoryItem from 'components/molecules/RootCategoryItem';
import SubCategoryItem from 'components/molecules/SubCategoryItem';
import { Colors } from 'components/common/constants';
import { Flex } from 'components/styles/flex';

interface CategoryNavProps extends IUseLink {
  categoryTree: PropInfoNode;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  linkProps,
  categoryTree,
}) => {
  return (
    <>
      <Heading>Category</Heading>
      <Tree
        linkProps={linkProps}
        rootNode={categoryTree}
        ContainerView={Container}
        SubContainerView={SubContainer}
        RootTreeItem={RootCategoryItem}
        SubTreeItem={SubCategoryItem}
      />
    </>
  );
};

const Container = styled(PlainList)`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: ${Colors.Primary};
`;

const SubContainer = styled(PlainList)`
  margin: 0.6em 0;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.3em;

  & > li a {
    color: #2c3e50;
  }
`;

const Heading = styled.h2`
  ${Flex.center}
  color: white;
  margin: 0.8em 0;
`;

export default CategoryNav;
