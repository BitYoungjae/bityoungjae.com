import React, { useCallback, useContext } from 'react';
import { styled } from 'components/typings/Theme';
import { ThemeMode } from 'components/styles/themes';
import ThemeIndicator from './ThemeIndicator';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeMode } from 'modules/themeContext/selector';
import { setTheme } from 'modules/themeContext/slice';

const ThemeChangeButton: React.FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(getThemeMode);

  const clickHandler = useCallback(() => {
    const newThemeMode: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    dispatch(setTheme({ themeMode: newThemeMode }));
  }, [themeMode]);

  return (
    <ThemeButton onClick={clickHandler} themeMode={themeMode}>
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
