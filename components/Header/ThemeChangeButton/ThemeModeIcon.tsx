import { ThemeMode } from 'components/styles/themes';
import FontAwsome from 'components/common/FontAwsome';
import { useContext } from 'react';
import { FilledContext } from '..';

const ThemeModeIcon: React.FC<{ iconType: ThemeMode }> = ({ iconType }) => {
  const isFilled = useContext(FilledContext);
  const iconName = iconType === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  const lightModeColor = isFilled ? 'white' : 'primary';
  const iconColor = iconType === 'light' ? lightModeColor : 'yellow';

  return <FontAwsome iconName={iconName} size='normal' color={iconColor} />;
};

export default ThemeModeIcon;
