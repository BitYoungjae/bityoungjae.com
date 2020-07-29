import { useState, useCallback, useMemo } from 'react';

export const useMultipleList = <T>(
  initList: T[][],
  sortCompareFn?: (a: any, b: any) => number,
) => {
  const sortedInitList = useMemo(() => {
    if (!sortCompareFn) return initList;

    const newList = initList.map((subList) => {
      subList.sort(sortCompareFn);
      return subList;
    });

    return newList;
  }, [initList]);

  const [displayList, setDisplayList] = useState(sortedInitList);

  const onReconcilList = useCallback(
    (index: number, list: T[]) => {
      const newList = displayList.slice(0, index + 1);
      if (!list) {
        setDisplayList(newList);
        return;
      }

      if (sortCompareFn) list.sort(sortCompareFn);

      newList.push(list);
      setDisplayList(newList);
    },
    [displayList, setDisplayList],
  );

  const onInitList = useCallback(() => {
    setDisplayList(sortedInitList);
  }, [sortedInitList, setDisplayList]);

  return { displayList, onReconcilList, onInitList };
};

export type IOnReconcilList<T> = (index: number, list: T[]) => void;
