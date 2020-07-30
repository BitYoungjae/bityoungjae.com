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

  margin-top: -0.5rem;
  padding: 1rem;

  ${({ direction = 'column' }) => direction === 'row' && alignRow};

  background-color: ${({ theme }) => theme.colors.listBox ?? 'white'};
  color: ${({ theme }) => theme.colors.textOnListBox ?? 'black'};
  border-radius: 0.3rem;

  box-shadow: 0 0.3rem 0.7rem
    ${({ theme }) => theme.colors.boxShadowOnBackground};
`;

const alignRow = css`
  flex-direction: row;
  justify-content: space-between;
`;

export default SubNavList;
