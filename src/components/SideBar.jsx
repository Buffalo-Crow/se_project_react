import React from "react";
import "../blocks/SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SideBar({ handleEditModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__profile">
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt="Header Avatar"
          />
          <p className="sidebar__username">{currentUser.name}</p>
        </div>
        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <button className="sidebar__nav-btn" onClick={handleEditModal}>
              Change Profile Data
            </button>
          </li>
          <li className="sidebar__nav-item">
            <button className="sidebar__nav-btn">Sign Out </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
