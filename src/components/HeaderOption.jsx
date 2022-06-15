import { Avatar } from "@chakra-ui/react";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar size="sm" className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title" >{title}</h3>
    </div>
  );
}

export default HeaderOption;
