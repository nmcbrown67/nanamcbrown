import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState('/');
    const location = useLocation();

    // Update active path when location changes
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.navbar')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const handleNavClick = useCallback((path) => {
        closeMobileMenu();
        setActivePath(path);
    }, [closeMobileMenu]);

    return {
        isMobileMenuOpen,
        activePath,
        toggleMobileMenu,
        closeMobileMenu,
        handleNavClick
    };
}; 