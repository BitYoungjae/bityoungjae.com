import React from 'react';
import Tree, { PropInfoNode } from '../atoms/Tree';
import { IUseLink } from 'components/typings/common';
import styled from 'styled-components';
import { PlainList } from 'components/common/styleHelpers';

interface CategoryNavProps extends IUseLink {
  categoryTree: PropInfoNode;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  linkProps,
  categoryTree,
}) => {
  return (
    <>
      <Tree
        linkProps={linkProps}
        rootNode={categoryTree}
        ContainerView={Container}
        SubContainerView={SubContainer}
      />
    </>
  );
};

const Container = styled(PlainList)`
  display: flex;
  flex-direction: column;

  justify-content: center;

  position: fixed;
  width: 100%;
  height: 50vh;

  bottom: 0;
  right: 0;
  z-index: 999;

  padding: 1em;
  background-color: #4291f7;

  & > li {
    margin: 0.3em 0;
  }

  & a {
    text-decoration: none;
  }

  & > li a {
    color: white;
  }
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

export default CategoryNav;
