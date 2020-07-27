export const throttling = (fn: (...args: any[]) => any, time: number) => {
  let isPending = false;

  return (...args: any[]) => {
    if (!isPending) {
      fn(...args);
      isPending = true;
      setTimeout(() => {
        isPending = false;
        fn(...args);
      }, time);
    }
  };
};
