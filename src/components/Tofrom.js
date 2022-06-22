import React from "react";
import "./tofrom.css";

export const Tofrom = ({ Availablelocations, valuesetter }) => {
  return Availablelocations.map((location) => {
    return (
      <div key={location} className="location" onClick={valuesetter}>
        {location}
      </div>
    );
  });
};

export default Tofrom;
