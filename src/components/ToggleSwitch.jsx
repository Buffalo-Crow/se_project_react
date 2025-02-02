import { useState } from "react";
import "../blocks/ToggleSwitch.css";

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleToggleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="toggle-switch">
      <input
        checked={checked}
        onChange={handleToggleChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch_circle"></span>
      <span className="toggle-switch__text toggle-switch__text-F">F</span>
      <span className="toggle-switch__text toggle-switch__text-C">C</span>
    </label>
  );
}

export default ToggleSwitch;
