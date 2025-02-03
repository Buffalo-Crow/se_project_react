import React from "react";
import "../blocks/SideBar.css";
import headerAvatar from "../assets/avatar.png";

function SideBar() {
  return (
    <div className="sidebar__profile">
      <img className="sidebar__avatar" src={headerAvatar} alt="Header Avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
