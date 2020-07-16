import { getPageHandler, ListPageProp } from 'poststore';
import PostList from 'components/organism/PostList';
import Pagination from 'components/molecules/Pagination';
import Header from 'components/organism/Header';

const Post = ({ main: { postList, currentPage, totalPage } }: ListPageProp) => {
  return (
    <>
      <Header
        mainText='BITYOUNGJAE'
        subText='개발자하려고 퇴사했습니다'
        texts={{
          main: {
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '.03em',
          },
        }}
        linkProps={{
          href: '/blog',
        }}
      />
      <PostList postList={postList} href='/blog/[post]' as='/blog/' />
      <Pagination
        current={currentPage}
        total={totalPage}
        displayRange={5}
        linkProps={{ href: '/blog/[...page]', as: '/blog/page/' }}
      />
    </>
  );
};

export default Post;

const { getPathsBySlug, getPropsBySlug } = getPageHandler({
  useConfig: true,
  storeName: 'blog',
});

export async function getStaticPaths() {
  const paths = await getPathsBySlug();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { page } }) {
  const props = await getPropsBySlug(page);

  return {
    props,
  };
}
