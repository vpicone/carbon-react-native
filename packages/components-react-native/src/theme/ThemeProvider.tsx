import React, { useState, useEffect, useContext } from 'react';
import { white, g100 } from '@carbon/themes';
import { Appearance, ColorValue } from 'react-native';
import type { ColorToken } from './ColorToken';

/*
 * import colors from './colors';
 * import darkColors from './colorsDark';
 */

export type Theme = Record<ColorToken, 'string'>;

const defaultTheme: Theme =
  Appearance.getColorScheme() === 'dark' ? g100 : white;

export const ThemeContext = React.createContext({
  theme: defaultTheme,
});

export const useTheme: () => Theme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const listener: Appearance.AppearanceListener = ({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? g100 : white);
    };

    Appearance.addChangeListener(listener);

    return function () {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
