export const linkProps = {
  home: {
    href: '/',
  },
  category: {
    href: '/categories/[...category]',
    as: '/categories/',
  },
  page: {
    href: '/[...page]',
    as: '/page/',
  },
  tag: {
    href: '/tags/[...tag]',
    as: '/tags/',
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

export const IconNames = {
  bars: 'fas fa-bars',
  close: 'fas fa-times',
};

export const Colors = {
  Primary: '#4291f7',
};
