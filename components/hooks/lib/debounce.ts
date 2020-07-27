export const debounce = (fn: (...args: any[]) => any, time: number) => {
  let timerId: number = -1;

  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
