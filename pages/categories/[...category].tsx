import { getCategoryPageHandler, ListPageProp } from 'poststore';

const CategoryPage: React.FC<ListPageProp> = ({ global }) => <p>1</p>;

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
