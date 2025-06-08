import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";

function Profile({
  onCardClick,
  handleAddClick,
  clothingItems,
  handleDeleteCard,
  handleEditModal,
}) {
  return (
    <div className="profile">
      <SideBar handleEditModal={handleEditModal} />
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
