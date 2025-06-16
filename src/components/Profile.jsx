import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";

function Profile({
  onCardClick,
  handleAddClick,
  clothingItems,
  handleDeleteCard,
  handleEditModal,
  handleSignOut,
  onCardLike
}) {
  return (
    <div className="profile">
      <SideBar
        handleEditModal={handleEditModal}
        handleSignOut={handleSignOut}
      />
      <ClothesSection
        onCardLike={onCardLike}
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
        handleDeleteCard={handleDeleteCard}
      />
    </div>
  );
}

export default Profile;
