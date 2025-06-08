import WeatherBanner from "../assets/weather_banner.png";
import "../blocks/WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg;{currentTemperatureUnit}
      </div>
      <img
        src={WeatherBanner}
        className="weather__banner"
        alt="weather banner of current conditions"
      />
    </section>
  );
}

export default WeatherCard;
