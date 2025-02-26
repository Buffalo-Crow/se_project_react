import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";

function Profile({ onCardClick, handleAddClick, clothingItems }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
