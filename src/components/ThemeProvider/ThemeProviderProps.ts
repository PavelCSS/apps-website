import { ReactNode } from 'react';
import { ThemeType } from './ThemeType';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export type ThemeProviderProps = {
  theme?: ThemeOptions | Partial<Record<ThemeType, ThemeOptions>>;
  themeType?: ThemeType;
  children: ReactNode;
  isRoot?: boolean;
};

type IconButtonSizeProps = {
  padding: number;
  fontSize: number;
};

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    isDarkMode: boolean;
    iconButton: Record<'small' | 'medium' | 'large', IconButtonSizeProps>;
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    isDarkMode?: boolean;
    iconButton?: Record<'small' | 'medium' | 'large', IconButtonSizeProps>;
  }
}
