import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import headerAvatar from "../assets/avatar.png";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
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

      <div className="header__user-container">
        <Link className="header__username-link " to="/profile">
          {" "}
          <p className="header__username">Terrence Tegegne</p>
        </Link>
        <Link to="/profile">
          <img
            src={headerAvatar}
            alt="profile picture"
            className="header__avatar"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
