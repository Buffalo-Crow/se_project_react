import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import { handleDeleteCard } from "../utils/api";

function Profile({
  onCardClick,
  handleAddClick,
  clothingItems,
  handleDeleteCard,
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
        handleDeleteCard={handleDeleteCard}
      />
    </div>
  );
}

export default Profile;
