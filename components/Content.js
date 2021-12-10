import React from 'react'
import Image from 'next/image'
import {
    ThumbUpIcon
  } from "@heroicons/react/outline";

function Content({data , newData}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    const items = data.results
    console.log(items)
    return (
        <div className="flex items-center justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {items ? items.map(({id , backdrop_path , release_date , title , poster_path , original_title, vote_count , popularity  , overview}) => (
              <div key={id} className=" p-4 cursor-pointer">
                  <Image 
                   src={`${BASE_URL}${poster_path || backdrop_path}` || `${BASE_URL}${poster_path}`}
                   width={400}
                   alt="image"
                   height={350}
                   className="rounded-lg hover:scale-105 transition-all ease-in-out duration-[600]"
                   />
                   <h1 className="text-white text-xl">{original_title || title}</h1>
                   <span className="text-white flex items-center"><i>{release_date}</i> {" "} <ThumbUpIcon className="text-white sm:w-4 w-4 group-hover:animate-bounce inline-block text-center"/> {" "} {vote_count || popularity}</span>
              </div>
          )) : null}
        </div>
        </div>
    )
}

export default Content
