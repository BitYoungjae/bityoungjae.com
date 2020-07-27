import { getTagPageHandler, ListPageProp } from 'poststore';

const TagPage: React.FC<ListPageProp> = (props) => <p>1</p>;

export default TagPage;

const { getPathsBySlug, getPropsBySlug } = getTagPageHandler({
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

export async function getStaticProps({ params: { tag } }) {
  const props = await getPropsBySlug(tag);

  return {
    props,
  };
}
