import { getTagPageHandler, ListPageProp } from 'poststore';
import PostListPage from 'components/layout/PostListPage';
import { linkProps } from 'components/common/constants';

const TagPage: React.FC<ListPageProp> = (props) => (
  <PostListPage {...props} linkProps={linkProps.tag} />
);

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
