import React, { useState, useCallback } from 'react';
import NavItem from '../NavItem';
import BuildInfo from './BuildInfo';
import { GlobalProp } from 'poststore';
import HideableContainer from 'components/Header/common/HideableContainer';
import { useMouseHover } from 'components/hooks/useMouseHover';

interface BuildInfoItemProps extends GlobalProp {}

const BuildInfoItem: React.FC<BuildInfoItemProps> = (globalProps) => {
  const { isHover, hoverMouseEvent } = useMouseHover();

  return (
    <>
      <NavItem onMouseEnter={hoverMouseEvent} onMouseLeave={hoverMouseEvent}>
        빌드정보
        {isHover && (
          <HideableContainer>
            <BuildInfo {...globalProps} />
          </HideableContainer>
        )}
      </NavItem>
    </>
  );
};

export default BuildInfoItem;
