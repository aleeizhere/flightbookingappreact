import React from "react";
import "./availableflights.css";
const Availableflight = ({ userdata, resultset }) => {
  const { clientfrom, clientto, adults, child, infant, type } = userdata;
  let filteredarray = [resultset[3],resultset[0]];
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
  // adding logo to the logo property
  for (let eachflight of filteredarray) {
    if (eachflight.airline === "Airsial") {
      eachflight.logo =
        "https://s3.ap-south-1.amazonaws.com/st-airline-images/PF.png";
    } else if (eachflight.airline === "Serene Air") {
      eachflight.logo =
        "https://s3.ap-south-1.amazonaws.com/st-airline-images/ER.png";
    } else if (eachflight.airline === "Pakistan International Airlines") {
      eachflight.logo =
        "https://s3.ap-south-1.amazonaws.com/st-airline-images/PK.png";
    } else if (eachflight.airline === "Airblue") {
      eachflight.logo =
        "https://s3.ap-south-1.amazonaws.com/st-airline-images/PA.png";
    } else if (eachflight.airline === "Qatar Airways") {
      eachflight.logo =
        "https://s3.ap-south-1.amazonaws.com/st-airline-images/QR.png";
    } else if (eachflight.airline === "Emirates") {
      eachflight.logo =
        "https://s3.ap-south-1.amazonaws.com/st-airline-images/EK.png";
    }
  }
  return (
    <div className="mainComponent">
      {filteredarray.map((flight) => {
        const { flightid, from, to, time, date, airline, price, logo } = flight;
        return (
          <div className="container">
            <div className="infodiv">
              <div className="airline">
                <img src={logo} alt={`${airline} Logo`} />
                {airline}
              </div>
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
              <div className="price">
                <h3>{price}/=</h3>
              </div>
            </div>
            <button className="selbtn">Select</button>
          </div>
        );
      })}
    </div>
  );
};

export default Availableflight;
