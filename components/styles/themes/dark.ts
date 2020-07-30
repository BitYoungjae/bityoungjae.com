import defaultTheme from './default';
import { SiteTheme } from 'components/typings/Theme';

const darkThemeProps: Partial<SiteTheme> = {
  colors: {
    //...작성 필요
  },
};

const darkTheme: SiteTheme = { ...defaultTheme, ...darkThemeProps };

export default darkTheme;
