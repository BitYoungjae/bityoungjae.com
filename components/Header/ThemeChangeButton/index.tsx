import React, { useCallback, useContext } from 'react';
import { styled } from 'components/typings/Theme';
import { ThemeMode } from 'components/styles/themes';
import { SetThemeContext, ThemeKeyContext } from 'pages/_app';
import ThemeIndicator from './ThemeIndicator';

const ThemeChangeButton: React.FC = () => {
  const themeKey = useContext(ThemeKeyContext);
  const setThemeContext = useContext(SetThemeContext);

  const clickHandler = useCallback(() => {
    const newThemeKey = themeKey === 'light' ? 'dark' : 'light';
    setThemeContext(newThemeKey);
  }, [themeKey]);

  return (
    <ThemeButton onClick={clickHandler} themeMode={themeKey}>
      <ThemeIndicator />
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

  background-color: ${({ themeMode, theme }) =>
    themeMode === 'light' ? '#0984e3' : theme.colors.lightGray};

  transition: background-color 0.5s;
`;

export default ThemeChangeButton;
