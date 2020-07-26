export const trimPageParam = (asPath: string) => {
  const splittedPath = asPath.split('/');
  const targetKeyPos = splittedPath.length - 2;

  if (splittedPath[targetKeyPos] === 'page') {
    return splittedPath.slice(0, targetKeyPos).join('/');
  }

  return asPath;
};
