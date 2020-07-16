import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { GetProps } from '../typings/common';
import { getPageRangeProps } from '../utils/getPageRange';

interface FixedPaginationProps extends Omit<getPageRangeProps, 'displayRange'> {
  fontSize?: string;
  linkProps: GetProps<Link>;
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
              <i className='fas fa-arrow-left'></i>
            </FixedArrowButton>
          </a>
        </Link>
      )}
      {hasRight && (
        <Link {...linkProps} as={`${linkProps.as}${current + 1}`}>
          <a>
            <FixedArrowButton position='right' fontSize={fontSize}>
              <i className='fas fa-arrow-right'></i>
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
