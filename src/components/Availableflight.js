import React from "react";
import "./availableflights.css";
const Availableflight = ({ userdata, resultset }) => {
  const { clientfrom, clientto, adults, child, infant, type } = userdata;
  let filteredarray = [];
  for (let currval of resultset) {
    const { to, from, econseats, busseats, preconseat, fclassseat } = currval;

    if (to === clientto && from === clientfrom) {
      if (
        type.toUpperCase() === "ECONOMY" &&
        econseats >= adults + child + infant
      ) {
        filteredarray.push(currval);
      } else if (
        type.toUpperCase() === "BUSINESS" &&
        busseats >= adults + child + infant
      ) {
        filteredarray.push(currval);
      } else if (
        type.toUpperCase() === "PREMIUM ECON." &&
        preconseat >= adults + child + infant
      ) {
        filteredarray.push(currval);
      } else if (
        type.toUpperCase() === "FIRST CLASS" &&
        fclassseat >= adults + child + infant
      ) {
        filteredarray.push(currval);
      }
    }
  }
  return <div className="mainComponent"></div>;
};

export default Availableflight;
