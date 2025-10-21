import React from 'react'
import "./header.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EjectIcon from '@mui/icons-material/Eject';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';

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
            <li><SearchTwoToneIcon/></li>
            <li>Kids</li>
            <li><EjectIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li className="profile"><AccountBoxTwoToneIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
