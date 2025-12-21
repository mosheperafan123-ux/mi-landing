import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children, onOpenLegal }: LayoutProps & { onOpenLegal?: (type: 'privacy' | 'terms') => void }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-dark bg-white">
            <Header />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer onOpenLegal={onOpenLegal || (() => { })} />
        </div>
    );
};
