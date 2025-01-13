import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
}) {
  return (
    <>
      <div
        className={`modal ${activeModal === "add-garment" && "modal_opened"}`}
      >
        <div className="modal__container">
          <h2 className="modal__title">{title}</h2>
          <button
            type="button"
            className="modal__close"
            onClick={closeActiveModal}
          ></button>
          <form className="modal__form">
            {" "}
            {children}
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
          </form>{" "}
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;