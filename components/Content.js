import React from 'react'
import Image from 'next/image'

function Content({data}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    const items = data.results
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {items ? items.map(({id , backdrop_path , first_air_date , name , poster_path , original_name , vote_count , popularity  , overview}) => (
              <div key={id} className="">
                  <Image 
                   src={`${BASE_URL}${poster_path || backdrop_path}` || `${BASE_URL}${poster_path}`}
                   width={400}
                   alt="image"
                   height={350}
                   />
              </div>
          )) : null}
        </div>
    )
}

export default Content
