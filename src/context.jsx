import { createContext, useContext, useState, useEffect } from 'react';
import { onSetTheme } from './util/helpers';

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === 'true';
};

export const searchHistory = []

export const AppProvider = ({ children }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState(null);
  

  let theme = 'light';

  if (isDarkTheme) {
    theme = 'dark';
  }

  const toggleDarkTheme = () => {
    onSetTheme(theme);

    const newDarkTheme = !isDarkTheme;

    setIsDarkTheme(newDarkTheme);

    localStorage.setItem('darkTheme', newDarkTheme);
  };

 

  useEffect(() => {
    setSearchTerm('islands')
    onSetTheme(theme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
