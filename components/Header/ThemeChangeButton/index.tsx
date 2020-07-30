import React, { useState, useCallback } from 'react';
import { styled, css } from 'components/typings/Theme';
import FontAwsome from 'components/common/FontAwsome';

type ThemeMode = 'dark' | 'light';

const ThemeChangeButton: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const buttonHandler = useCallback(
    () => setThemeMode((theme) => (theme === 'light' ? 'dark' : 'light')),
    [setThemeMode],
  );

  return (
    <ThemeButton onClick={buttonHandler} themeMode={themeMode}>
      <ModeIndicator themeMode={themeMode} />
    </ThemeButton>
  );
};

interface ThemeButtonProps {
  themeMode: ThemeMode;
}

const ThemeButton = styled.button<ThemeButtonProps>`
  width: 4rem;
  height: 2rem;

  cursor: pointer;

  margin-right: 1rem;

  border: 0;
  border-radius: 3rem;

  background-color: ${({ themeMode }) =>
    themeMode === 'light' ? '#0984e3' : '#2d3436'};

  transition: background-color 0.5s;
`;

interface ModeIndicatorProps {
  themeMode: ThemeMode;
}

const ModeIndicator: React.FC<ModeIndicatorProps> = ({ themeMode }) => {
  const indicatorPosition = themeMode === 'light' ? 'right' : 'left';

  return (
    <Indicator position={indicatorPosition}>
      <ModeIcon themeMode={themeMode} />
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

const ModeIcon: React.FC<ModeIndicatorProps> = ({ themeMode }) => {
  const iconName = themeMode === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  const iconColor = themeMode === 'light' ? 'white' : 'yellow';

  return <FontAwsome iconName={iconName} size='big' color={iconColor} />;
};

export default ThemeChangeButton;
