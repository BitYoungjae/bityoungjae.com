import { getMainPageHandler, ListPageProp } from 'poststore';
import PostList from 'components/organism/PostList';

const Post = ({ main: { postList } }: ListPageProp) => {
  return (
    <>
      <PostList postList={postList} href='/blog/[post]' as='/blog/' />
    </>
  );
};

export default Post;

const { getMainProps } = getMainPageHandler({
  storeName: 'blog',
  useConfig: true,
});

export async function getStaticProps() {
  const props = await getMainProps();

  return {
    props,
  };
}
