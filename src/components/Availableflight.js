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
  return (
    <div className="mainComponent">
      {filteredarray.map((flight) => {
        const { flightid, from, to, time, date, airline, price } = flight;
        return (
          <div className="infodiv">
            <div className="flightid">
              <h4>Flight ID</h4>
              <h3>{flightid}</h3>
            </div>
            <div className="from">
              <h4>From</h4>
              <h3>{from}</h3>
            </div>
            <div className="to">
              <h4>To</h4>
              <h3>{to}</h3>
            </div>
            <div className="time">
              <h4>Time</h4>
              <h3>{time}</h3>
            </div>
            <div className="date">
              <h4>Date</h4>
              <h3>{date}</h3>
            </div>
            <div className="airline">
              <h4>Airline</h4>
              <h3>{airline}</h3>
            </div>
            <div className="price">
              <h4>Price</h4>
              <h3>{price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Availableflight;
