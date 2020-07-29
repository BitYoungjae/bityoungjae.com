import { styled, css } from 'components/typings/Theme';
import { PlainList } from 'components/styles/alias';
import { UpdateStyledProps } from 'components/typings/SCHelper';

interface SubNavListProps {
  direction?: 'row' | 'column';
}

const PlainListAsSubNavList = PlainList as UpdateStyledProps<
  typeof PlainList,
  SubNavListProps
>;

const SubNavList = styled(PlainListAsSubNavList)`
  display: inline-flex;
  flex-direction: column;

  padding: 1rem;

  ${({ direction = 'column' }) => direction === 'row' && alignRow};

  background-color: white;
  border-radius: 0.3rem;

  box-shadow: 0 0.3rem 0.7rem rgba(0, 0, 0, 0.3);
`;

const alignRow = css`
  flex-direction: row;
  justify-content: space-between;
`;

export default SubNavList;