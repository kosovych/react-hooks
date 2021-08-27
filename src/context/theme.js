import { createContext } from 'react';

export const context = {
  theme: 'light',
  toggleTheme: theme => {
    return theme
  },
}

export const ThemeContext = createContext({...context});
