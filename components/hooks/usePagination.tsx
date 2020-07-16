export interface usePaginationProps {
  current: number | string;
  total: number | string;
  displayRange: number;
}

export const usePagination = ({
  current,
  total,
  displayRange,
}: usePaginationProps) => {
  const currentPage = +current;
  const totalPage = +total;

  const maxRange = displayRange > totalPage ? totalPage : displayRange;
  const middle = Math.round(maxRange / 2);
  const isEven = maxRange % 2 === 0;
  const rightDistance = middle - (isEven ? 0 : 1);

  let start: number;
  let end: number;

  if (currentPage <= middle) {
    start = 1;
    end = start + maxRange - 1;
  } else if (totalPage - currentPage < rightDistance) {
    start = totalPage - maxRange + 1;
    end = totalPage;
  } else {
    start = currentPage - middle + 1;
    end = currentPage + rightDistance;
  }

  const pageRange = [...range(start, end)];

  return pageRange;
};

function* range(start: number, end: number) {
  let now = start;

  while (now <= end) {
    yield now++;
  }
}
