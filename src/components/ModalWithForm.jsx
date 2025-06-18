import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeActiveModal,
  isOpen,
  onSubmit,
  childrenButtons,
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
          {children}

          <div className="modal__button-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>{" "}
            {childrenButtons}
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default ModalWithForm;
