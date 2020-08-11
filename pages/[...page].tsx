import { getPageHandler, ListPageProp } from 'poststore';
import ListPage from 'layout/ListPage';

const Page: React.FC<ListPageProp> = ({
  global,
  main: { postList, currentPage, totalPage },
}) => (
  <ListPage
    globalProps={global}
    postList={postList}
    tagList={global.tagList}
    currentPage={currentPage}
    totalPage={totalPage}
  />
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
