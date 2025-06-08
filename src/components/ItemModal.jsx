import { useContext } from "react";
import "../blocks/ItemModal.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  item,
  closeActiveModal,
  handleDeleteConfirm,
}) {
  const { currentUser, selectedCard } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__container modal__container_type-image">
        <button
          type="button"
          className="modal__close modal__close_preview"
          onClick={closeActiveModal}
        ></button>
        <img
          src={item.imageUrl}
          alt="modal image of clothing item"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{item.name}</h2>
          <p className="modal__weather">Weather : {item.weather}</p>
          {isOwn && (
            <button
              className="modal__delete-button"
              onClick={() => {
                handleDeleteConfirm();
              }}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
