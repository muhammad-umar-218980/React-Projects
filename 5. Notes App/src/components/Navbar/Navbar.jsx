import { StickyNote, Palette, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const { theme, currentTheme, setTheme, availableThemes } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`sticky top-0 w-full py-4 backdrop-blur-md border-b z-50 transition-colors duration-300 ${theme.navbarBg}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-2 rounded-lg shadow-sm">
            <StickyNote className="text-white" size={24} />
          </div>
          <h1 className={`text-xl font-bold tracking-tight ${theme.navbarText}`}>
            Notes
          </h1>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${theme.actionHover} ${theme.navbarText}`}
          >
            <Palette size={18} />
            <span className="text-sm font-medium hidden sm:block">Theme</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl border overflow-hidden py-1 z-50 ${theme.navbarBg} ${theme.cardBase}`}>
              {availableThemes.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setTheme(t.key);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between
                    ${currentTheme === t.key ? 'font-bold' : ''}
                    ${theme.actionHover} ${theme.navbarText}
                  `}
                >
                  {t.name}
                  {currentTheme === t.key && <div className="w-2 h-2 rounded-full bg-yellow-400" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;