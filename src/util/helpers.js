const thems = {
  light: {
    '--bg-color': '#d8d8d8',
    '--color': 'black',
  },
  dark: {
    '--bg-color': 'black',
    '--color': '#fff',
  },
};

export const onSetTheme = (theme) => {
  const themeVariant = thems[theme];
  Object.entries(themeVariant).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};


export const debounce = (cb) => {

    let timerId; 

    return (...args) => {
        
        clearTimeout(timerId)

        timerId = setTimeout(() => { 

            cb(...args)
            
        }, 700)
    }
}