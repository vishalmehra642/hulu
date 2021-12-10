import React, { useState } from "react";
import {useSearchData} from '../store/useSearchData'

export const NavIcon = ({ text, Icon, search }) => {
 const searchArray = useSearchData(state => state.addSearchData);



  const [open, setOpen] = useState(false);
  const handleSearch = (text) => {
    if (text === "search") {
      setOpen(!open);
    }
  };
  const [SearchQuery , UpdateSearchQuery] = useState([]);
  const [timeoutid , updatetimeout] =useState();
  const [movielist , updatemovielist] = useState();


  const fetchData = async (searchdata) => {
   const response = await fetch(`https://www.omdbapi.com/?s=${searchdata}&apikey=ad105760`);
   const data = await response.json();
   searchArray(data?.Search)
   return updatemovielist(data?.Search)
   

  }
   const OnTextChange = (event) => {
       clearTimeout(timeoutid)
     UpdateSearchQuery(event.target.value)
     const timeout = setTimeout(() => fetchData(event.target.value), 500)
     updatetimeout(timeout)
   }
  
  return (
    <>
      <div className=" flex md:flex-row flex-col items-center ">
        <div
          className="group  w-auto text-center cursor-pointer"
          onClick={() => handleSearch(text)}
        >
          <Icon className="text-white sm:w-8 w-6 group-hover:animate-bounce inline-block text-center" />
          <h1 className="text-white opacity-0 group-hover:opacity-100  sm:text-base text-xs sm:font-semibold text-center uppercase">
            {text}
          </h1>
        </div>
      </div>
      {search ? (
        <div
          className={`relative text-gray-600 focus-within:text-gray-400  ${
            open ? "" : "hidden"
          } `}
        >
            <form>
          <input
            type="search"
            name="q"
            onChange={OnTextChange}
            value={SearchQuery}
            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-2 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
          />
          </form>
        </div>
      ) : null}
    </>
  );
};
