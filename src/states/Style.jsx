import { useState, useEffect } from 'react';

export function Style() {
    const [style, setStyle] = useState(localStorage.getItem('style') || 'basic');

    useEffect(() => {
        const handleStorageChange = () => {
            setStyle(localStorage.getItem('style') || 'basic');
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        {style}
    );
}