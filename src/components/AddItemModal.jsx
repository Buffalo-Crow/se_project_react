import ModalWithForm from "./ModalWithForm";
import "../blocks/AddItemModal.css";
import { useState } from "react";

function AddItemModal({
  closeActiveModal,
  isOpen,
  activeModal,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weatherType });
    setImageUrl("");
    setName("");
    setWeatherType("");
  };

  return (
    <ModalWithForm
      buttonText="Add Garment"
      title="New Garment"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          placeholder="Name"
          className="modal__input"
          type="text"
          id="name"
          required
          minLength={"1"}
          maxLength={"30"}
          onChange={handleNameChange}
          value={name}
        />{" "}
      </label>
      <label className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          id="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />{" "}
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the Weather Type</legend>
        <label className="modal__label modal__label_type_radio">
          <input
            name="weather"
            className="modal__input_type_radio"
            type="radio"
            id="choiceHot"
            value="hot"
            checked={weatherType === "hot"}
            onChange={handleWeatherChange}
          />
          <span className="modal__radio_text">Hot</span>
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            name="weather"
            className="modal__input_type_radio"
            type="radio"
            id="choiceWarm"
            value="warm"
            checked={weatherType === "warm"}
            onChange={handleWeatherChange}
          />
          <span className="modal__radio_text">Warm</span>
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            name="weather"
            className="modal__input_type_radio"
            type="radio"
            id="choiceCold"
            value="cold"
            checked={weatherType === "cold"}
            onChange={handleWeatherChange}
          />
          <span className="modal__radio_text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
