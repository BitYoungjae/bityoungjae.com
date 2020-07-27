import { getPageHandler, ListPageProp } from 'poststore';

const Page: React.FC<ListPageProp> = (props) => <p>1</p>;

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
