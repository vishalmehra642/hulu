import React from 'react';
    

export const NavIcon  =  ({text , Icon}) => {
    return(<>
        <div className="group  w-auto text-center cursor-pointer">
            <Icon className="text-white sm:w-8 w-6 group-hover:animate-bounce inline-block text-center"/>
            <h1 className="text-white opacity-0 group-hover:opacity-100  sm:text-base text-xs sm:font-semibold text-center uppercase">{text}</h1>
        </div>
        </>)
}
