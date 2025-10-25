import { createContext, useContext, useState, useEffect } from 'react';

const StyleContext = createContext();

export function StyleProvider({ children }) {
    const [style, setStyle] = useState(localStorage.getItem('style') || 'basic');

    useEffect(() => {
        const handleStorageChange = () => {
            setStyle(localStorage.getItem('style') || 'basic');
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const updateStyle = () => {
        const newStyle = style === 'basic' ? 'advanced' : 'basic';
        localStorage.setItem('style', newStyle);
        setStyle(newStyle);
    };

    return (
        <StyleContext.Provider value={{ style, updateStyle }}>
            {children}
        </StyleContext.Provider>
    );
}

export function useStyle() {
    return useContext(StyleContext);
}