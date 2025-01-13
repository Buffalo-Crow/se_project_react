import "../blocks/ItemModal.css";

function ItemModal({ activeModal, item, closeActiveModal, handleCardClick }) {
  return (
    <>
      <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
        <div className="modal__container modal__container_type-image">
          <button
            type="button"
            className="modal__close modal__close_preview"
            onClick={closeActiveModal}
          ></button>
          <img src={item.link} alt="" className="modal__image" />
          <div className="modal__footer">
            <h2 className="modal__caption">{item.name}</h2>
            <p className="modal__weather">Weather : {item.weather}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
