import React, { useState } from "react";
import "./userinfo.css";
import { Link } from "react-router-dom";
import availableflightAPI from "../availableflightAPI";
import Tofrom from "./Tofrom";

const UserInfo = () => {
  const fromall = availableflightAPI.map((e) => e.from);
  const fromto = availableflightAPI.map((e) => e.to);

  function arrayunique(arr) {
    let uniquearr = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniquearr.indexOf(arr[i]) === -1) {
        uniquearr.push(arr[i]);
      }
    }
    return uniquearr;
  }

  const availableflightsfrom = arrayunique(fromall);
  const availableflightsto = arrayunique(fromto);
  // jb fetch use krenge, initially flyingfrom ki array khali rahegi
  const [flyingfrom, inputfrom] = useState([]);
  const [flyingto, inputto] = useState([]);
  const [locationvaluefrom, setvaluefrom] = useState("");
  const [locationvalueto, setvalueto] = useState("");
  const setlocationvalue = (event) => {
    setvaluefrom(event.target.innerText);
  };
  const setlocationvalueto = (event) => {
    setvalueto(event.target.innerText);
  };

  const flyingfrominput = (event) => {
    inputfrom(
      event.target.value.length === 0
        ? []
        : availableflightsfrom.filter((v) => {
            return v.toLowerCase().includes(event.target.value.toLowerCase())
              ? v
              : null;
          })
    );
  };
  const flyingtoinput = (event) => {
    inputto(
      event.target.value.length === 0
        ? []
        : availableflightsto.filter((v) => {
            return v.toLowerCase().includes(event.target.value.toLowerCase())
              ? v
              : null;
          })
    );
  };
  return (
    <>
      <h1>Search Flights</h1>
      <span className="underline"></span>
      <div className="inputcontainer">
        <div className="row1">
          <div className="inputfields sm">
            <span className="label">Flying from</span>
            <input
              type="search"
              onChange={flyingfrominput}
              value={locationvaluefrom}
            />
            <div className="locationcontainer">
              <Tofrom
                Availablelocations={flyingfrom}
                valuesetter={setlocationvalue}
              />
            </div>
          </div>
          <div className="inputfields sm">
            <span className="label">Flying to</span>
            <input
              type="search"
              onChange={flyingtoinput}
              value={locationvalueto}
            />
            <div className="locationcontainer">
              <Tofrom
                Availablelocations={flyingto}
                valuesetter={setlocationvalueto}
              />
            </div>
          </div>
          <div className="inputfields sm">
            <span className="label">No. of Passengers</span>
            <input type="text" />
          </div>
        </div>
        <div className="row2">
          <div className="inputfields lg">
            <span className="label">Seat class</span>

            <div className="seatclasscontainer" style={{ marginTop: "0.5rem" }}>
              <div className="seatclass">
                <input
                  type="radio"
                  id="economy"
                  name="seattype"
                  value="economy"
                  defaultChecked
                />
                <label htmlFor="economy">Economy</label>
              </div>

              <div className="seatclass">
                <input
                  type="radio"
                  id="business"
                  name="seattype"
                  value="business"
                />
                <label htmlFor="business">Business</label>
              </div>
            </div>
          </div>

          <div className="inputfields lg">
            <span className="label">Date of travel</span>

            <input type="date" />
          </div>
        </div>
      </div>
      <span className="underline"></span>
      <Link to="/registration">
        <button className="submitbutton">Search</button>
      </Link>
    </>
  );
};

export default UserInfo;
