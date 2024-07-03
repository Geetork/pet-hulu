import React, { MouseEventHandler } from 'react';

const Button: React.FC<{ 
    title: string, 
    type: 'primary' | 'secondary' | 'tertiary', 
    onClick?: () => void,
    className?: string, 
}> = ({
    title, 
    type, 
    className, 
    onClick }) => {
    const typeClasses = {
        'primary': 'bg-green-primary text-black hover:bg-green-primary/70',
        'secondary': 'bg-gray-600',
        'tertiary': 'text-gray-400 hover:text-slate-400',
    }

    return (
        <button 
            onClick={onClick}
            className={`transition-all ease-in-out duration-100
                        delay-75 w-full h-full text-sm font-bold rounded-lg 
                        ${typeClasses[type]} px-6 ${className}`}>
            <span>{title}</span>
        </button>
    )
}

export default Button;