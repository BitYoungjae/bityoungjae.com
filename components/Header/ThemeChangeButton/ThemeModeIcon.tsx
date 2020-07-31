import { ThemeMode } from 'components/styles/themes';
import FontAwsome from 'components/common/FontAwsome';

const ThemeModeIcon: React.FC<{ iconType: ThemeMode }> = ({ iconType }) => {
  const iconName = iconType === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  const iconColor = iconType === 'light' ? 'white' : 'yellow';

  return <FontAwsome iconName={iconName} size='normal' color={iconColor} />;
};

export default ThemeModeIcon;
