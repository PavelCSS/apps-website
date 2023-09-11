import { createContext } from 'react';

export const ThemeContext = createContext<{
  isDarkMode: boolean;
  themeChange: (isDarkMode: boolean) => void;
}>({
  isDarkMode: false,
  themeChange: () => {},
});
