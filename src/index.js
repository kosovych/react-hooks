import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { ThemeContext } from './context/theme';

const IndexComponent = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme: setTheme}}>
      <App />
    </ThemeContext.Provider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <IndexComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
