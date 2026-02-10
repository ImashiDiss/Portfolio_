import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? 
        <Sun size={20} className="text-yellow-400" /> : 
        <Moon size={20} className="text-slate-700" />
      }
    </button>
  );
};

export default ThemeToggle;
