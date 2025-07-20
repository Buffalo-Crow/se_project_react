import "../blocks/ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked =
    currentUser && item.likes.some((id) => id === currentUser._id);

  const handleLikeClick = () => {
    onCardLike({ id: item._id, isLiked });
  };

  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

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
        {currentUser && currentUser._id && (
          <button
            onClick={handleLikeClick}
            className={likeButtonClassName}
          ></button>
        )}
      </div>
    </li>
  );
}

export default ItemCard;
