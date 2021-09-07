import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

const UseContextHook = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handle = () => toggleTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <>
      <button
        className="theme-btn"
        type="button"
        onClick={handle}>
        {theme === 'light' ? <span>🌙</span> : <span>☀️</span> }
      </button>
    </>
  )
};

export default UseContextHook;
