import React, { useContext } from 'react';
import FontAwsome from '../../common/FontAwsome';
import NavSection from './NavSection';
import { GetDOMAttributeFromStyledComponent } from 'components/typings/SCHelper';
import { FilledContext } from '..';

interface NavItemProps
  extends GetDOMAttributeFromStyledComponent<typeof NavSection> {
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  hasDropdown = true,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isFilled = useContext(FilledContext);

  return (
    <NavSection onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {hasDropdown && (
        <FontAwsome
          iconName='fas fa-angle-down'
          color={isFilled ? 'iconOnFilledHeader' : 'iconOnBackground'}
        />
      )}
    </NavSection>
  );
};

export default React.memo(NavItem);
