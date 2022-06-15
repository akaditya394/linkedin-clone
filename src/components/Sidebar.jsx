import React from "react";
import { Avatar } from "@chakra-ui/react";
import "./Sidebar.css";

function Sidebar() {
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
        <Avatar className="sidebar__avatar" />
        <h2>Aditya Kumar</h2>
        <h4>akaditya394@gmail.com</h4>
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
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software')}
        {recentItem('nextjs')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
