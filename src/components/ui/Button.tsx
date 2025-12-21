import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        const variants = {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            outline: 'border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg shadow-sm transition-all duration-200 font-medium',
            ghost: 'text-dark hover:text-primary hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200 font-medium',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    variants[variant],
                    // Override size if it's primary/secondary since they have padding in CSS utility classes
                    // asking for 'sm' might need !important or specific override if relying on @apply
                    // But our @apply has basic sizes. Let's rely on classes for specific overrides.
                    // Actually, our @apply classes set px/py. So specific sizes might conflict.
                    // Let's rely on the classes below taking precedence if tailwind-merge works well.
                    (variant === 'outline' || variant === 'ghost') && sizes[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
