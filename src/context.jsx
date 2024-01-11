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
 

export const AppProvider = ({ children }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('islands');
  const [isOpen, setIsOpen] = useState(false)
  const [modalItem, setItemModal] = useState({})
  
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('history'))|| [])
  const [isFind, setIsFind] = useState(false)
  
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
    onSetTheme(theme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
        modalItem,
        setItemModal,
        setIsOpen,
        isOpen,
        searchHistory,
        setSearchHistory,
        isFind,
        setIsFind,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
