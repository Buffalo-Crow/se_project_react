import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../blocks/app.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./Profile";

import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { CurrentTempertatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

import { coordinates, APIkey } from "../utils/constants";
import AddItemModal from "./AddItemModal";
import { getItems, addItem, handleDeleteCard } from "../utils/api";
import DeleteModal from "./DeleteModal";

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
  const [clothingItems, setClothingItems] = useState([]);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteConfirm = () => {
    setActiveModal("delete-confirm");
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

  const handleAddItemModalSubmit = ({ name, imageUrl, weatherType }) => {
    addItem({ name, imageUrl, weatherType })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    handleDeleteCard(selectedCard._id)
      .then(() => {
        const newItemsArray = clothingItems.filter(
          (item) => item._id !== selectedCard._id
        );
        setClothingItems(newItemsArray);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
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
          <Route
            path="/profile"
            element={
              <Profile
                onCardClick={handleCardClick}
                handleAddClick={handleAddClick}
                clothingItems={clothingItems}
              />
            }
          />
        </Routes>

        <Footer />
        <AddItemModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          activeModal={activeModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          item={selectedCard}
          handleCardClick={handleCardClick}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "preview"}
          handleDeleteConfirm={handleDeleteConfirm}
        />
        <DeleteModal
          activeModal={activeModal}
          isOpen={activeModal === "delete-confirm"}
          closeActiveModal={closeActiveModal}
          handleDeleteSubmit={handleDeleteSubmit}
        />
      </div>
    </CurrentTempertatureUnitContext.Provider>
  );
}
export default App;
