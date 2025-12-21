import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Productos', href: '#features' },
        { name: 'Casos', href: '#cases' },
        { name: 'Precios', href: '#pricing' },
        { name: 'Recursos', href: '#' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src="/logo-v3.png" alt="Tutink Logo" className="h-10 w-auto object-contain" />
                    <span className="text-xl font-bold text-dark tracking-tight">TUTINK</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button variant="primary" size="sm" className="bg-primary/90 hover:bg-primary text-sm px-5 py-2.5" onClick={() => window.open('https://wa.link/u93xj7', '_blank')}>
                        Agendar cita
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 flex flex-col gap-4 animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-700 hover:text-primary py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" fullWidth onClick={() => window.open('https://wa.link/u93xj7', '_blank')}>
                        Agendar cita
                    </Button>
                </div>
            )}
        </header>
    );
};
