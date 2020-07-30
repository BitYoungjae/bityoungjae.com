import ThemeModeIcon from './ThemeModeIcon';
import { useContext } from 'react';
import { ThemeKeyContext } from 'pages/_app';
import styled, { css } from 'styled-components';

const ThemeIndicator: React.FC = () => {
  const themeKey = useContext(ThemeKeyContext);
  const indicatorPosition = themeKey === 'light' ? 'right' : 'left';

  return (
    <Indicator position={indicatorPosition}>
      <ThemeModeIcon iconType={themeKey} />
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
