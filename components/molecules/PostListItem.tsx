import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ShortPostData } from 'poststore/dist/typings';
import FormattedDate from 'components/atoms/FormattedDate';

interface PostListItemProps {
  postData: ShortPostData;
  href: string;
  as: string;
}

const PostListItem: React.FC<PostListItemProps> = ({
  postData: { title, thumbnail, excerpt, date, slug, categories },
  href,
  as,
}) => {
  return (
    <Link href={href} as={`${as}${slug}`}>
      <ListItemBox>
        {thumbnail && <Thumbnail src={thumbnail} />}
        <ContentBox>
          <h2>{title}</h2>

          {excerpt && <p className='excerpt'>{excerpt}</p>}
          <HR />
          <InfoBox>
            {categories && <span>{categories.join('/')}</span>}
            <span>
              <FormattedDate date={date} />
            </span>
          </InfoBox>
        </ContentBox>
      </ListItemBox>
    </Link>
  );
};

const ListItemBox = styled.li`
  list-style: none;
  margin: 0.5rem;

  display: flex;
  flex-direction: column;

  flex-basis: 100%;
  flex-grow: 1;

  cursor: pointer;

  box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  overflow: hidden;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & span {
    letter-spacing: 0.05em;
  }
`;

const Thumbnail = styled.img`
  object-fit: cover;
  display: inline-block;
  flex-shrink: 0;
  height: 15rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 1.5rem;

  & > h2 {
    font-family: 'Jua', sans-serif;
    font-size: 2rem;
    letter-spacing: 0.1em;
    margin: 0;
  }

  & p,
  span {
    font-family: 'Noto Sans KR', sans-serif;
  }

  & > p {
    line-height: 1.5em;
    font-size: 1rem;
  }

  & > p.excerpt {
    margin-bottom: 0;
  }
`;

const HR = styled.div`
  width: 90%;
  height: 0.2rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 1.5rem 0;
`;

export default PostListItem;
