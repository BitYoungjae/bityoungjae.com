import fnsFormat from 'date-fns/format';

export const formatDate = (date: number, format = 'yyyy-MM-dd') => {
  return fnsFormat(date, format);
};
