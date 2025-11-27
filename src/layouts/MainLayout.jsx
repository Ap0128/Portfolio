import React from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

const MainLayout = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <Navbar />
            <main className="pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
                {children}
            </main>
            <footer className={`py-8 text-center border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900 text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;
