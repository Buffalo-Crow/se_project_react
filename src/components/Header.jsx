import { useContext } from "react";
import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Header({ handleAddClick, weatherData, setActiveModal }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="header logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        type="button"
        onClick={handleAddClick}
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>

      {!isLoggedIn ? (
        <div>
          <button
            type="button"
            onClick={handleSignUpClick}
            className="header__add-clothes-btn"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={handleLoginClick}
            className="header__add-clothes-btn"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="header__user-container">
          <Link className="header__username-link " to="/profile">
            <p className="header__username">{currentUser.name}</p>
          </Link>
          <Link to="/profile">
            <img
              src={currentUser.avatar}
              alt="profile picture"
              className="header__avatar"
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
