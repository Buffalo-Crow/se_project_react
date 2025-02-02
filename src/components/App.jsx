import { useState } from "react";
import { useEffect } from "react";

import "../blocks/app.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { CurrentTempertatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

import { coordinates, APIkey } from "../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTempertatureUnitContext.Provider value={currentTemperatureUnit}>
      <div className="app">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
        <ModalWithForm
          buttonText="Add Garment"
          title="New Garment"
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "add-garment"}
        >
          <label className="modal__label">
            Name{" "}
            <input
              placeholder="Name"
              className="modal__input"
              type="text"
              id="name"
            />{" "}
          </label>
          <label className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              placeholder="Image URL"
              id="imageUrl"
            />{" "}
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the Weather Type</legend>
            <label className="modal__label modal__label_type_radio">
              <input
                name="weather"
                className="modal__input_type_radio"
                type="radio"
                id="cold"
              />
              <span className="modal__radio_text">Hot</span>
            </label>
            <label className="modal__label modal__label_type_radio">
              <input
                name="weather"
                className="modal__input_type_radio"
                type="radio"
                id="cold"
              />
              <span className="modal__radio_text">Warm</span>
            </label>
            <label className="modal__label modal__label_type_radio">
              <input
                name="weather"
                className="modal__input_type_radio"
                type="radio"
                id="cold"
              />
              <span className="modal__radio_text">Cold</span>
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          item={selectedCard}
          handleCardClick={handleCardClick}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "preview"}
        />
      </div>
    </CurrentTempertatureUnitContext.Provider>
  );
}
export default App;
