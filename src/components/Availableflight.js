import React from "react";
import "./availableflights.css";
const Availableflight = ({ resultset }) => {
  return (
    <div className="mainComponent">
      {resultset.map((currval) => {
        const { flightid, to, from, time, date, seattype, price, airline } =
          currval;
        return (
          <div key={currval.flightid} className="infodiv">
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
            <div className="seattype">
              <h4>Seat Class</h4>
              <h3>{seattype}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Availableflight;
