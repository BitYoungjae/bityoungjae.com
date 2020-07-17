export const linkProps = {
  home: {
    href: '/blog',
  },
  category: {
    href: '/blog/categories/[...category]',
    as: '/blog/categories/',
  },
  page: {
    href: '/blog/[...page]',
    as: '/blog/page/',
  },
};

export const fonts = {
  header: {
    main: 'Montserrat, sans-serif',
  },
};

export const textStyles = {
  header: {
    main: {
      fontFamily: fonts.header.main,
      letterSpacing: '.1em',
    },
  },
};
