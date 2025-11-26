import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    default: {
        name: 'Default',
        appBg: 'bg-gray-50',
        navbarBg: 'bg-white/80 border-gray-200',
        navbarText: 'text-gray-800',
        textColor: 'text-gray-900',
        mutedText: 'text-gray-500',
        cardBase: 'border-gray-200 shadow-sm',
        inputBg: 'bg-transparent',
        actionHover: 'hover:bg-black/5',
        colors: {
            default: 'bg-white text-gray-900',
            red: 'bg-red-100 text-gray-900',
            orange: 'bg-orange-100 text-gray-900',
            yellow: 'bg-yellow-100 text-gray-900',
            green: 'bg-green-100 text-gray-900',
            teal: 'bg-teal-100 text-gray-900',
            blue: 'bg-blue-100 text-gray-900',
            indigo: 'bg-indigo-100 text-gray-900',
            purple: 'bg-purple-100 text-gray-900',
            pink: 'bg-pink-100 text-gray-900',
        }
    },
    black: {
        name: 'Black',
        appBg: 'bg-black',
        navbarBg: 'bg-zinc-900/80 border-zinc-800',
        navbarText: 'text-white',
        textColor: 'text-gray-100',
        mutedText: 'text-gray-400',
        cardBase: 'border-zinc-800 shadow-none',
        inputBg: 'bg-zinc-900',
        actionHover: 'hover:bg-white/10',
        colors: {
            default: 'bg-zinc-900 text-gray-100',
            red: 'bg-red-950 border border-red-900 text-gray-100',
            orange: 'bg-orange-950 border border-orange-900 text-gray-100',
            yellow: 'bg-yellow-950 border border-yellow-900 text-gray-100',
            green: 'bg-green-950 border border-green-900 text-gray-100',
            teal: 'bg-teal-950 border border-teal-900 text-gray-100',
            blue: 'bg-blue-950 border border-blue-900 text-gray-100',
            indigo: 'bg-indigo-950 border border-indigo-900 text-gray-100',
            purple: 'bg-purple-950 border border-purple-900 text-gray-100',
            pink: 'bg-pink-950 border border-pink-900 text-gray-100',
        }
    },
    blackGold: {
        name: 'Black & Gold',
        appBg: 'bg-black',
        navbarBg: 'bg-black border-yellow-600/30',
        navbarText: 'text-yellow-500',
        textColor: 'text-yellow-500',
        mutedText: 'text-yellow-500/60',
        cardBase: 'border-yellow-600/30 shadow-none',
        inputBg: 'bg-zinc-900',
        actionHover: 'hover:bg-yellow-500/10',
        colors: {
            default: 'bg-zinc-900 border border-yellow-600/20 text-yellow-500',
            red: 'bg-red-950 border border-red-900 text-yellow-500',
            orange: 'bg-orange-950 border border-orange-900 text-yellow-500',
            yellow: 'bg-yellow-950 border border-yellow-900 text-yellow-500',
            green: 'bg-green-950 border border-green-900 text-yellow-500',
            teal: 'bg-teal-950 border border-teal-900 text-yellow-500',
            blue: 'bg-blue-950 border border-blue-900 text-yellow-500',
            indigo: 'bg-indigo-950 border border-indigo-900 text-yellow-500',
            purple: 'bg-purple-950 border border-purple-900 text-yellow-500',
            pink: 'bg-pink-950 border border-pink-900 text-yellow-500',
        }
    },
    blueGold: {
        name: 'Blue & Gold',
        appBg: 'bg-slate-950',
        navbarBg: 'bg-slate-900/80 border-yellow-500/30',
        navbarText: 'text-yellow-400',
        textColor: 'text-yellow-100',
        mutedText: 'text-yellow-100/60',
        cardBase: 'border-yellow-500/20 shadow-lg shadow-blue-900/20',
        inputBg: 'bg-slate-900',
        actionHover: 'hover:bg-yellow-400/10',
        colors: {
            default: 'bg-slate-900 border border-yellow-500/20 text-yellow-100',
            red: 'bg-slate-900 border-l-4 border-l-red-500 border-y border-r border-slate-800 text-yellow-100',
            orange: 'bg-slate-900 border-l-4 border-l-orange-500 border-y border-r border-slate-800 text-yellow-100',
            yellow: 'bg-slate-900 border-l-4 border-l-yellow-500 border-y border-r border-slate-800 text-yellow-100',
            green: 'bg-slate-900 border-l-4 border-l-green-500 border-y border-r border-slate-800 text-yellow-100',
            teal: 'bg-slate-900 border-l-4 border-l-teal-500 border-y border-r border-slate-800 text-yellow-100',
            blue: 'bg-slate-900 border-l-4 border-l-blue-500 border-y border-r border-slate-800 text-yellow-100',
            indigo: 'bg-slate-900 border-l-4 border-l-indigo-500 border-y border-r border-slate-800 text-yellow-100',
            purple: 'bg-slate-900 border-l-4 border-l-purple-500 border-y border-r border-slate-800 text-yellow-100',
            pink: 'bg-slate-900 border-l-4 border-l-pink-500 border-y border-r border-slate-800 text-yellow-100',
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme') || 'default';
    });

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const value = {
        theme: themes[currentTheme],
        currentTheme,
        setTheme: setCurrentTheme,
        availableThemes: Object.keys(themes).map(key => ({ key, name: themes[key].name }))
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
