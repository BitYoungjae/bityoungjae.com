import Link from 'next/link';
import { getPostPageHandler, PostPageProp } from 'poststore';

const Post = ({
  param,
  main: {
    postData: { title, html, date, prevPost, excerpt, thumbnail, nextPost },
  },
}: PostPageProp) => {
  return (
    <>
      <h1>
        {title} - {param}
      </h1>
      <h2>{new Date(date).toLocaleString()}</h2>
      {excerpt && <h2>요약 : {excerpt}</h2>}
      {thumbnail && <h2>썸네일 : {thumbnail}</h2>}
      <div className='article' dangerouslySetInnerHTML={{ __html: html }}></div>
      {prevPost && (
        <Link href='/blog/[post]' as={`/blog/${prevPost.slug}`}>
          <a>이전 포스트 : {prevPost.title}</a>
        </Link>
      )}
      {nextPost && (
        <Link href='/blog/[post]' as={`/blog/${nextPost.slug}`}>
          <a>다음 포스트 : {nextPost.title}</a>
        </Link>
      )}
    </>
  );
};

export default Post;

const { getPathsBySlug, getPropsBySlug } = getPostPageHandler({
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
export async function getStaticProps({ params: { post } }) {
  const props = await getPropsBySlug(post);

  return {
    props,
  };
}
