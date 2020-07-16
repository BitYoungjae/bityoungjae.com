/** @type {import('poststore').PostStoreConfig} */
module.exports = {
  storeOption: [
    {
      storeName: 'blog',
      postDir: './posts/Blog',
      perPage: 1,
      pageParam: {
        post: 'post',
        category: 'category',
        tag: 'tag',
        page: 'page',
      },
      imageMaxWidth: 800,
    },
    {
      storeName: 'poststore',
      postDir: './posts/PostStore',
      perPage: 3,
      pageParam: {
        post: 'post',
        category: 'category',
        tag: 'tag',
        page: 'page',
      },
    },
  ],
};
