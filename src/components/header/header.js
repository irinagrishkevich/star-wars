import React from 'react'

import './header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="goole.com">Star Wars</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="goole.com">People</a>
        </li>
        <li>
          <a href="goole.com">Planets</a>
        </li>
        <li>
          <a href="goole.com">Starships</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
