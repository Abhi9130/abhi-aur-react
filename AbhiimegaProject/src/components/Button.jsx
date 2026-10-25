import React from 'react'

function  Bttoun ({
    children,
    type = 'button',
    bgColor = '',
    clasName = '',
    ...props
}) { 
    return (
        <button className = {'px-4 py-2 rounded-lg ${bgColor} $ {textColor} ${className}'}
        {...props}>
            {children}
        </button>



    )
}
export default Bttoun