import { useState, useCallback } from 'react';

export const useMultipleList = <T>(initList: T[][]) => {
  const [displayList, setDisplayList] = useState(initList);

  const onReconcilList = useCallback(
    (index: number, list: T[]) => {
      const newList = displayList.slice(0, index + 1);

      if (!list) {
        setDisplayList(newList);
        return;
      }

      newList.push(list);
      setDisplayList(newList);
    },
    [displayList, setDisplayList],
  );

  const onInitList = useCallback(() => {
    setDisplayList(initList);
  }, [initList]);

  return { displayList, onReconcilList, onInitList };
};

export type IOnReconcilList<T> = (index: number, list: T[]) => void;
