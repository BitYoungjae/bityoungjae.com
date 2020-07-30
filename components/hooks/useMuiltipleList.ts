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

  const [selectStatus, setSelectStatus] = useState<number[]>([]);
  const [displayList, setDisplayList] = useState(sortedInitList);

  const onReconcilList = useCallback(
    (index: number, subIndex: number, list: T[]) => {
      setDisplayList((prevList) => {
        if (!list) {
          return prevList;
        }

        const newList = prevList.slice(0, index + 1);
        newList.push(list);

        if (sortCompareFn) list.sort(sortCompareFn);

        return newList;
      });

      setSelectStatus((prevStat) => {
        const newStat = prevStat.slice(0, index + 1);
        newStat[index] = subIndex;

        return newStat;
      });
    },
    [setDisplayList, setSelectStatus],
  );

  const onInitList = useCallback(() => {
    setDisplayList(sortedInitList);
    setSelectStatus([]);
  }, [sortedInitList, setDisplayList, setSelectStatus]);

  return { displayList, onReconcilList, onInitList, selectStatus };
};

export type IOnReconcilList<T> = (
  index: number,
  subIndex: number,
  list: T[],
) => void;
