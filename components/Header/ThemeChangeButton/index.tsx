import React, { useCallback, useContext } from 'react';
import { styled, ColorList } from 'components/styles/themes/types';
import { ThemeMode } from 'components/styles/themes';
import ThemeIndicator from './ThemeIndicator';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeMode } from 'modules/themeContext/selector';
import { setTheme } from 'modules/themeContext/slice';
import { FilledContext } from '..';

const ThemeChangeButton: React.FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(getThemeMode);
  const isFilled = useContext(FilledContext);

  const lightModeColor: ColorList = isFilled
    ? 'iconOnFilledHeader'
    : 'iconOnBackground';

  const clickHandler = useCallback(() => {
    const newThemeMode: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    dispatch(setTheme({ themeMode: newThemeMode }));
  }, [themeMode]);

  return (
    <ThemeButton
      onClick={clickHandler}
      themeMode={themeMode}
      lightModeColor={lightModeColor}
    >
      <ThemeIndicator />
    </ThemeButton>
  );
};

interface ThemeButtonProps {
  themeMode: ThemeMode;
  lightModeColor?: ColorList;
}

const ThemeButton = styled.button<ThemeButtonProps>`
  width: 4rem;
  height: 2rem;

  cursor: pointer;

  margin-right: 1rem;

  border: 0;
  border-radius: 3rem;

  background-color: ${({ themeMode, theme, lightModeColor }) =>
    themeMode === 'light'
      ? theme.colors[lightModeColor]
      : theme.colors.lightGray};

  transition: background-color 0.5s;
`;

export default ThemeChangeButton;
