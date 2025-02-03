import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection />
    </div>
  );
}

export default Profile;
