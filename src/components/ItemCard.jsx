import "../blocks/ItemCard.css";
import Heart from "../assets/heart_icon.png";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="card__container">
        <h2 className="card__caption">{item.name}</h2>
        <button className=".card__like-button">♥</button>
      </div>
    </li>
  );
}

export default ItemCard;
