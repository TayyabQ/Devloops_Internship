import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-screen relative top-0 bg-transparent py-4 px-8 flex justify-between items-center">
        <ul className="flex flex-row gap-10">
            <li className="text-shadow-2xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-extrabold">
            <NavLink to="/">MOVIZ</NavLink>
            </li>
        </ul>

  <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex flex-row gap-10">
        {/* <li className="text-lg font-medium text-gray-700 hover:text-gray-900">
            <NavLink to="/last_watched">Last Watched</NavLink>
        </li> */}
        <li className="text-xs sm:text-sm md:text-lg font-medium text-gray-700 hover:text-gray-900">
            <NavLink to="/watch_later">Watch Later</NavLink>
        </li>
        <li className="text-xs sm:text-sm md:text-lg font-medium text-gray-700 hover:text-gray-900">
            <NavLink to="/likes">Likes</NavLink>
        </li>
        <li className="text-xs sm:text-sm md:text-lg font-medium text-gray-700 hover:text-gray-900">
            <NavLink to="/reviews">Reviews</NavLink>
        </li>
        </ul>
  </div>
</div>

  )
}

export default Navbar
