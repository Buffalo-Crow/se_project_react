import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeActiveModal,
  isOpen,
  onSubmit,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}
      }
`}
    >
      <div className="modal-with-form__container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={closeActiveModal}
        />
        <form onSubmit={onSubmit} className="modal__form">
          {" "}
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>{" "}
      </div>
    </div>
  );
}

export default ModalWithForm;
