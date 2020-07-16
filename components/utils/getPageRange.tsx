export interface getPageRangeProps {
  current: number;
  total: number;
  displayRange: number;
}

export const getPageRange = ({
  current,
  total,
  displayRange,
}: getPageRangeProps) => {
  const maxRange = displayRange > total ? total : displayRange;
  const middle = Math.round(maxRange / 2);
  const isEven = maxRange % 2 === 0;
  const rightDistance = middle - (isEven ? 0 : 1);

  let start: number;
  let end: number;

  if (current <= middle) {
    start = 1;
    end = start + maxRange - 1;
  } else if (total - current < rightDistance) {
    start = total - maxRange + 1;
    end = total;
  } else {
    start = current - middle + 1;
    end = current + rightDistance;
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
