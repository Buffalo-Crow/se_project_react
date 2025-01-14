import WeatherBanner from "../assets/weather_banner.png";
import "../blocks/WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img
        src={WeatherBanner}
        className="weather__banner"
        alt="weather banner of current conditions"
      />
    </section>
  );
}

export default WeatherCard;
