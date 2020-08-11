import ThemeModeIcon from './ThemeModeIcon';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { getThemeMode } from 'modules/themeContext/selector';

const ThemeIndicator: React.FC = () => {
  const themeMode = useSelector(getThemeMode);
  const indicatorPosition = themeMode === 'light' ? 'right' : 'left';

  return (
    <Indicator position={indicatorPosition}>
      <ThemeModeIcon iconType={themeMode} />
    </Indicator>
  );
};

interface IndicatorProps {
  position: 'left' | 'right';
}

const Indicator = styled.div<IndicatorProps>`
  display: inline-block;
  transform: translateX(0);

  ${({ position }) => positionStyle(position)};

  transition: transform 0.5s;
`;

const positionStyle = (position: IndicatorProps['position']) => css`
  transform: ${position === 'left' ? 'translateX(-50%)' : 'translateX(50%)'};
`;

export default ThemeIndicator;
