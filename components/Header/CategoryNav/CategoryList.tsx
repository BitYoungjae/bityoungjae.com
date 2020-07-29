import styled from 'styled-components';
import { PlainList } from 'components/styles/alias';

const CategoryList = styled(PlainList)`
  padding-right: 1rem;
  & + & {
    padding-left: 1rem;
    border-left: 0.1rem solid rgba(0, 0, 0, 0.3);
  }
  &:last-of-type {
    padding-right: 0;
  }
`;

export default CategoryList;
