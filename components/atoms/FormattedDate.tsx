import React from 'react';
import fnsFormat from 'date-fns/format';

interface DateInfoProps {
  date: number;
  format?: string;
}

const FormattedDate: React.FC<DateInfoProps> = ({
  date,
  format = 'yyyy-MM-dd',
}) => {
  return <>{fnsFormat(date, format)}</>;
};

export default FormattedDate;
