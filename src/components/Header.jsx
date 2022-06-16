import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="icon" />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="My Networks" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MailIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/ogw/ADea4I5StS-r7E65MXY60mgCR0zfkTmlwIsFftkQsoXj7g=s32-c-mo"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
