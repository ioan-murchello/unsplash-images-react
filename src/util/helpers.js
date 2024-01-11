const thems = {
  light: {
    '--bg-color': '#f5faff',
    '--color': 'black',
    '--btn-bg': '#e3e3e3',
    '--btn-bg-hover': 'rgb(196, 195, 195)',
    '--input-bg': '#ffd900',
  },
  dark: {
    '--bg-color': '#4d4d4d',
    '--color': '#fff',
    '--btn-bg': '#ff9900',
    '--btn-bg-hover': 'rgb(255, 170, 58)',
    '--input-bg': '#a0a0a0',
  },
};

export const onSetTheme = (theme) => {
  const themeVariant = thems[theme];
  Object.entries(themeVariant).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

// Debounce funciton
export const debounce = (cb) => {

    let timerId; 

    return (...args) => {
        
        clearTimeout(timerId)

        timerId = setTimeout(() => { 

            cb(...args)
            
        }, 800)
    }
}

//For FramerMotin css library


