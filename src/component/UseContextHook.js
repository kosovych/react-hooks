import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

const UseContextHook = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        className="theme-btn"
        type="button"
        onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <span>🌙</span> : <span>☀️</span> }
      </button>
    </>
  )
};

export default UseContextHook;
