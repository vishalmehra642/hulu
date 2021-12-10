import React from 'react'
import requests from '../utiles/requests'
import {useRouter} from 'next/router'

function Navbar() {
    const router = useRouter()
    return (
        <div className="pl-4 sm:pl-8 flex space-x-10 sm:space-x-20 sm:items-center xl:justify-center w-full overflow-x-scroll">
            {Object.entries(requests).map(([key , {title , url}]) => (
                <h1 key={key} className="text-white text-xl whitespace-nowrap cursor-pointer " onClick={() => router.push(`/?genre=${key}`)}>{title}</h1>
            ))}
        </div>
    )
}

export default Navbar
