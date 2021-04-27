import React from "react";
import { useEffect } from "react";

function Timespace({ timespace, handleChange, motoristIndex }) {
  console.log(timespace.isSelected, timespace.motorists);
  return (
    <div className="timespace">
      <div className="counter">Motoristas: {timespace.motorists}</div>
      <div className="time">
        <input
          type="checkbox"
          id="time-check"
          className="time-check"
          onChange={(e) => handleChange(e.target, motoristIndex)}
          disabled={!timespace.isSelected & (timespace.motorists == 0)}
        />
        <label htmlFor="time-check" className="time-label">
          {timespace.time}
        </label>
      </div>
    </div>
  );
}

export default Timespace;
