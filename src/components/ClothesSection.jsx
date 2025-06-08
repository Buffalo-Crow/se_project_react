import { useContext } from "react";
import "../blocks/ClothesSection.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ItemCard from "./ItemCard";

function ClothesSection({ onCardClick, handleAddClick, clothingItems }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="clothes-section">
      <div className="clothes-section-container">
        <p className="clothes-section__caption">Your Items</p>
        <button className="clothes-section__button" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <div className="clothes-section__items">
        <ul className="cards__list cards__list_profile">
          {clothingItems
            .filter((item) => currentUser._id === item.owner)
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default ClothesSection;
