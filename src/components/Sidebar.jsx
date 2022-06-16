import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1654714480262-28f8a5c208d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Avatar src={user.profilePic} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you?</p>
          <p className="sidebar__statNumber">2,425</p>
        </div>
        <div className="sidebar__stat">
          <p>viewed an post</p>
          <p className="sidebar__statNumber">2,425</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("nextjs")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
