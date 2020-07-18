import {
  UseBackground,
  IUseBackground,
  UseFont,
  IUseFont,
  IUseSize,
  UseSize,
  IUseMargin,
  UseMargin,
  IUseTextAlign,
  UseTextAlign,
} from 'components/styles/helpers';
import { CircleStyle } from 'components/styles/alias';
import styled from 'styled-components';

const CountView = styled.span<
  IUseBackground & IUseFont & IUseSize & IUseMargin & IUseTextAlign
>`
  ${CircleStyle}
  ${UseBackground({
    backgroundColor: 'white',
  })}
  ${UseSize({
    sizeHeight: '1.5em',
    sizeWidth: '1.5em',
  })}
  ${UseFont({
    textSize: '1rem',
  })}
  ${UseMargin({
    marginLeft: '.5em',
  })}
  ${UseTextAlign}

  display: inline-flex;
`;

export default CountView;
