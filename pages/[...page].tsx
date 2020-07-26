import { getPageHandler, ListPageProp } from 'poststore';
import PostListPage from 'components/layout/PostListPage';
import { linkProps } from 'components/common/constants';

const Page: React.FC<ListPageProp> = (props) => (
  <PostListPage {...props} linkProps={linkProps.page} />
);

export default Page;

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
