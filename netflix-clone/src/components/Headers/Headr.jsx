import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li className="logo">Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>🔍</li>
            <li>Kids</li>
            <li>DVD</li>
            <li>🔔</li>
            <li className="profile">🙂</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
