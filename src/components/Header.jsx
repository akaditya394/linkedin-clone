import React from "react";
import "./Header.css";
import {
  SearchIcon,
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  InboxIcon,
  BellIcon,
} from "@heroicons/react/solid";
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
        <HeaderOption Icon={UserGroupIcon} title="My Networks" />
        <HeaderOption Icon={BriefcaseIcon} title="Jobs" />
        <HeaderOption Icon={InboxIcon} title="Messaging" />
        <HeaderOption Icon={BellIcon} title="Notifications" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/ogw/ADea4I5StS-r7E65MXY60mgCR0zfkTmlwIsFftkQsoXj7g=s32-c-mo"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
