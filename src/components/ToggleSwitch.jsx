import { useState } from "react";
import "../blocks/ToggleSwitch.css";
import { useContext } from "react";
import { CurrentTempertatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTempertatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch_circle"></span>
      <span
        style={{ color: `${currentTemperatureUnit === "F" ? "white" : ""}` }}
        className="toggle-switch__text toggle-switch__text-F"
      >
        F
      </span>
      <span
        style={{ color: `${currentTemperatureUnit === "C" ? "white" : ""}` }}
        className="toggle-switch__text toggle-switch__text-C"
      >
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;

// const [checked, setChecked] = useState(false);

// const handleToggleChange = () => {
//   setChecked(!checked);
// };
