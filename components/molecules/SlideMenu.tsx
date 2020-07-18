import React, { useState, useCallback } from 'react';
import FontAwsome from 'components/atoms/FontAwsome';
import { IconNames } from 'components/common/constants';
import MenuButton from 'components/atoms/MenuButton';
import MenuBox from 'components/atoms/MenuBox';

const SlideMenu: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);

  const buttonHandler = useCallback(() => {
    setOpen((openState) => !openState);
  }, [setOpen]);

  return (
    <>
      <MenuButton
        textSize={isOpen ? '2.3rem' : '2rem'}
        sizeWidth='5rem'
        sizeHeight='5rem'
        onClick={buttonHandler}>
        <FontAwsome
          iconName={isOpen ? IconNames.close : IconNames.bars}
          color='white'
        />
      </MenuButton>
      {isOpen && <MenuBox backgroundColor='#4291f7'>{children}</MenuBox>}
    </>
  );
};

export default React.memo(SlideMenu);
