import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { AnimatePresence, motion } from 'framer-motion';

export const StickyCta = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past Hero (approx 600px)
            setIsVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-40"
                >
                    <Button
                        className="shadow-2xl shadow-primary/40 rounded-full px-6 py-4 font-bold text-base"
                        onClick={() => window.open('https://wa.link/u93xj7', '_blank')}
                    >
                        Agendar cita
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
