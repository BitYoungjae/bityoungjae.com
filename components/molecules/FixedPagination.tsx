import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { IUseLink } from '../typings/common';
import { getPageRangeProps } from '../utils/getPageRange';
import FontAwsome from 'components/atoms/FontAwsome';

interface FixedPaginationProps
  extends Omit<getPageRangeProps, 'displayRange'>,
    IUseLink {
  fontSize?: string;
}

const FixedPagination: React.FC<FixedPaginationProps> = ({
  current,
  total,
  linkProps,
  fontSize = '1.5rem',
}) => {
  if (!current || !total || !linkProps) return null;

  const hasLeft = current > 1 ? true : false;
  const hasRight = current === total ? false : true;

  return (
    <>
      {hasLeft && (
        <Link {...linkProps} as={`${linkProps.as}${current - 1}`}>
          <a>
            <FixedArrowButton position='left' fontSize={fontSize}>
              <FontAwsome iconName='fas fa-arrow-left' />
            </FixedArrowButton>
          </a>
        </Link>
      )}
      {hasRight && (
        <Link {...linkProps} as={`${linkProps.as}${current + 1}`}>
          <a>
            <FixedArrowButton position='right' fontSize={fontSize}>
              <FontAwsome iconName='fas fa-arrow-right' />
            </FixedArrowButton>
          </a>
        </Link>
      )}
    </>
  );
};

interface FixedArrowButtonProps {
  position: 'left' | 'right';
  fontSize?: string;
}
const FixedArrowButton = styled.button<FixedArrowButtonProps>`
  position: fixed;

  font-size: ${({ fontSize }) => fontSize};

  width: 3em;
  height: 3em;

  border-radius: 50%;
  border: none;
  background-color: #353b48;
  color: white;

  opacity: 0.5;

  bottom: calc(50vh - 1.5em);
  ${({ position }) => directionStyle(position)}
`;

const directionStyle = (position: FixedArrowButtonProps['position']) => {
  if (position === 'left') {
    return css`
      left: 1em;
    `;
  } else if (position === 'right') {
    return css`
      right: 1em;
    `;
  }
};

export default FixedPagination;
