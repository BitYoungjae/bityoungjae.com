import styled from 'styled-components';
import { PlainList } from 'components/styles/alias';

const PopUpContainer = styled(PlainList)`
  background-color: white;

  width: 14rem;
  padding: 1rem;

  border: 0.1rem solid ${(props) => props.theme.colors.borderOnWhite};
  border-radius: 0.3rem;

  box-shadow: 0 0.3rem 0.7rem #eee;
`;

export default PopUpContainer;
