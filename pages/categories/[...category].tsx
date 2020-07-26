import { getCategoryPageHandler, ListPageProp } from 'poststore';
import PostListPage from 'components/layout/PostListPage';
import { linkProps } from 'components/common/constants';

const CategoryPage: React.FC<ListPageProp> = (props) => (
  <PostListPage {...props} linkProps={linkProps.category} />
);

export default CategoryPage;

const { getPathsBySlug, getPropsBySlug } = getCategoryPageHandler({
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

export async function getStaticProps({ params: { category } }) {
  const props = await getPropsBySlug(category);

  return {
    props,
  };
}
