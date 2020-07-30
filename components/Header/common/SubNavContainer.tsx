import { styled, css } from 'components/typings/Theme';

interface SubNavContainer {
  isHide?: boolean;
}

const SubNavContainer = styled.nav<SubNavContainer>`
  position: absolute;

  width: 100vw;
  text-align: left;

  top: 100%;
  left: 0;

  ${({ isHide }) => isHide && hideStyle};
`;

const hideStyle = css`
  display: none;
`;

export default SubNavContainer;
