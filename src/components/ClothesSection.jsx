import "../blocks/ClothesSection.css";
import { defaultClothingItems } from "../utils/constants";
import ItemCard from "./ItemCard";

function ClothesSection() {
  return (
    <section className="clothes-section">
      <div className="clothes-section-container">
        <p className="clothes-section__caption">Your Items</p>
        <button className="clothes-section__button">+ Add New</button>
      </div>
      <div className="clothes-section__items">
        <ul className="cards__list cards__list_profile">
          {defaultClothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                // onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ClothesSection;
