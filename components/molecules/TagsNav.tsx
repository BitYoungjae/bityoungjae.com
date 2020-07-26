import React from 'react';
import styled from 'styled-components';
import { GlobalProp } from 'poststore';
import { IUseLink } from 'components/typings/common';
import MenuItem from './MenuItem';
import { Colors } from 'components/common/constants';
import FontAwsome from 'components/atoms/FontAwsome';
import Link from 'next/link';
import { PlainAnchor } from 'components/styles/plains';

interface TagsNavProps extends IUseLink {
  tagList: GlobalProp['tagList'];
}

const TagsNav: React.FC<TagsNavProps> = ({ tagList, linkProps }) => {
  return (
    <MenuItem title='Tag List'>
      <TagListBox>
        {tagList.map(({ name, postCount, slug }) => {
          return (
            <Link {...linkProps} as={`${linkProps.as}${slug}`}>
              <TagBox>
                <FontAwsome iconName='fas fa-tag' textColor='rgba(0,0,0,.5)' />
                <TagName>{name}</TagName>
                <TagCount>{postCount}</TagCount>
              </TagBox>
            </Link>
          );
        })}
      </TagListBox>
    </MenuItem>
  );
};

const TagListBox = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  flex-wrap: wrap;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  max-width: calc(50% - 0.6rem);
  margin: 0.3rem;

  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.8rem;

  border-radius: 1em;
`;

const TagName = styled.span`
  font-size: 0.9rem;
  font-weight: bold;

  color: rgba(0, 0, 0, 0.8);

  margin-left: 0.3rem;
`;

const TagCount = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  font-size: 0.8rem;
  font-weight: bold;

  margin-left: 0.3rem;

  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  width: 1.5em;
  height: 1.5em;

  border-radius: 50%;
`;

export default TagsNav;
