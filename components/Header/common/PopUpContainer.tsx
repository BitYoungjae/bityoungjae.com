import { styled, css } from 'components/typings/Theme';
import { PlainList } from 'components/styles/alias';
import { UpdateStyledProps } from 'components/typings/UpdateSyledProps';

const PlainListWithSizeProps = PlainList as UpdateStyledProps<
  typeof PlainList,
  { size?: string; isShow?: boolean }
>;

const PopUpContainer = styled(PlainListWithSizeProps)`
  position: absolute;

  top: calc(100% - 0.5rem);
  left: 0;

  ${({ size }) =>
    size &&
    css`
      width: ${size};
    `};

  ${({ isShow }) =>
    !isShow &&
    css`
      display: none;
    `}

  background-color: white;
  padding: 1rem;
  border-radius: 0.3rem;

  box-shadow: 0 0.3rem 0.7rem rgba(0, 0, 0, 0.3);
`;

export default PopUpContainer;
