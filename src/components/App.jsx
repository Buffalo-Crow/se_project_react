import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./Profile";

import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { CurrentTempertatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

import { coordinates, APIkey } from "../utils/constants";
import AddItemModal from "./AddItemModal";
import { defaultClothingItems } from "../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  const handleSubmit = () => {};

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTempertatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                handleCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
        <AddItemModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          activeModal={activeModal}
        />
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
