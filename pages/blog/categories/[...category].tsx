import { getCategoryPageHandler, ListPageProp } from 'poststore';
import PostListPage from 'components/layout/PostListPage';

const CategoryPage: React.FC<ListPageProp> = (props) => (
  <PostListPage {...props} />
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
