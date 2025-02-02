import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import headerAvatar from "../assets/avatar.png";
import ToggleSwitch from "./ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="header logo" />
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
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={headerAvatar}
          alt="profile picture"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
