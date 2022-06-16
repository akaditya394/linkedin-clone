import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="icon" />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="My Networks" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MailIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
        avatar={true}
          onClick={logoutOfApp}
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
