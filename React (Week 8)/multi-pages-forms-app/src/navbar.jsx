import React from 'react'

import {Link, NavLink} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/form">Form</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default navbar
