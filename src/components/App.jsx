import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "../blocks/app.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./Profile";

import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import { coordinates, APIkey } from "../utils/constants";
import AddItemModal from "./AddItemModal";
import { getItems, addItem, handleDeleteCard, editProfile } from "../utils/api";
import DeleteModal from "./DeleteModal";
import RegisterModal from "./RegisterModal";
import { register, signin, getUserInfo } from "../utils/auth";
import LoginModal from "./LoginModal";
import { ProtectedRoute } from "./ProtectedRoute";
import { setToken, getToken, removeToken } from "../utils/token";
import EditUserProfileModal from "./EditUserProfileModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleAuth = () => {
    const token = getToken();
    if (!token) {
      return setActiveModal("login");
    }
    return getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        navigate("/profile");
      })

      .catch(console.error);
  };

  //registration and login and authentication handlers
  const handleRegister = ({ name, avatar, email, password }) => {
    register(name, avatar, email, password)
      .then(() => {
        closeActiveModal();
      })
      .then(() => {
        handleLogin(email, password);
      })
      .then(() => {
        navigate("/profile");
      })

      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    signin(email, password)
      .then((res) => {
        setToken(res.token);
        return getUserInfo();
      })
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        navigate("/profile");
      })
      .catch(console.error);
  };

  // const handleSignOut =()=>{
  //   setIsLoggedIn(false)   
//   removeToken();
//navigate("/");
 // };

  // clickHandlers
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  const handleDeleteConfirm = () => {
    setActiveModal("delete-confirm");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleEditModal = () => {
    setActiveModal("edit-modal");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleEditProfileData = ({ name, avatar }) => {
    editProfile({ name, avatar })
      .then((res) => {
        console.log(res);
        setCurrentUser(res.data);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
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
    handleAuth();
  }, []);

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
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider
        value={{ currentUser, isLoggedIn, selectedCard }}
      >
        <div className="app">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            setActiveModal={setActiveModal}
          />
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
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onCardClick={handleCardClick}
                    handleAddClick={handleAddClick}
                    clothingItems={clothingItems}
                    handleEditModal={handleEditModal}
                  />
                </ProtectedRoute>
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
          <RegisterModal
            activeModal={activeModal}
            isOpen={activeModal === "register"}
            closeActiveModal={closeActiveModal}
            onRegister={handleRegister}
          />
          <LoginModal
            onLogin={handleLogin}
            activeModal={activeModal}
            isOpen={activeModal === "login"}
            closeActiveModal={closeActiveModal}
          />
          <EditUserProfileModal
            isOpen={activeModal === "edit-modal"}
            handleEditModal={handleEditModal}
            closeActiveModal={closeActiveModal}
            onEditProfileData={handleEditProfileData}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}
export default App;
