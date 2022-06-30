import React, { useState } from "react";
import "./travelermodal.css";
const TravelerModal = ({
  adultcount,
  setadultcount,
  childcount,
  setchildcount,
  infantcount,
  setinfantcount,
  setseattype,
  seattype,
  settravval,
}) => {
  let [change, setchange] = useState(false);
  if (!change || change) {
    settravval(
      `${seattype} | ${adultcount} Adults, ${childcount} Children, ${infantcount} Infants`
    );
  }
  return (
    <>
      <div className="modalcontainer">
        <div className="section class">
          <h5 className="sectionhead">Class</h5>
          <div className="classoptions">
            {/*  */}
            <input type="radio" id="econ" name="selclass" defaultChecked />
            <input type="radio" id="bus" name="selclass" />
            <input type="radio" id="peco" name="selclass" />
            <input type="radio" id="fclass" name="selclass" />

            <label
              htmlFor="econ"
              className="econ"
              onClick={() => {
                setseattype("Economy");
              }}
            >
              <div className="labelcontainer">
                <h5>Economy</h5>
              </div>
            </label>

            <label
              htmlFor="bus"
              className="bus"
              onClick={() => {
                setseattype("Business");
              }}
            >
              <div className="labelcontainer bus">
                <h5>Business</h5>
              </div>
            </label>

            <label
              htmlFor="peco"
              className="peco"
              onClick={() => {
                setseattype("Premium Econ.");
              }}
            >
              <div className="labelcontainer peco">
                <h5>Premium Economy</h5>
              </div>
            </label>

            <label
              htmlFor="fclass"
              className="fclass"
              onClick={() => {
                setseattype("First Class");
              }}
            >
              <div className="labelcontainer fclass">
                <h5>First Class</h5>
              </div>
            </label>

            {/*  */}
          </div>
        </div>
        <div className="section travelers">
          <div className="sectionhead">Travelers</div>
          <div className="traveleroptions">
            <div className="optionsrow">
              <div className="ageinfo">
                <h5 style={{ fontWeight: "800" }}>Adults</h5>
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "10px",
                    color: "rgba(0,0,0,0.700)",
                  }}
                >
                  12+ Years
                </h5>
              </div>
              <div className="counter">
                <div
                  className="counterdown"
                  onClick={() => {
                    setchange(change);
                    adultcount > 1 && infantcount < adultcount
                      ? setadultcount(adultcount - 1)
                      : setadultcount(adultcount);
                  }}
                >
                  -
                </div>
                <div className="personcount">{adultcount}</div>
                <div
                  className="counterup"
                  onClick={() => {
                    setchange(!change);
                    adultcount < 6
                      ? setadultcount(adultcount + 1)
                      : setadultcount(adultcount);
                  }}
                >
                  +
                </div>
              </div>
            </div>
            <div className="optionsrow">
              <div className="ageinfo">
                <h5 style={{ fontWeight: "800" }}>Children</h5>
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "10px",
                    color: "rgba(0,0,0,0.700)",
                  }}
                >
                  2-11 Years
                </h5>
              </div>
              <div className="counter">
                <div
                  className="counterdown"
                  onClick={() => {
                    childcount > 0
                      ? setchildcount(childcount - 1)
                      : setchildcount(0);
                  }}
                >
                  -
                </div>
                <div className="personcount">{childcount}</div>
                <div
                  className="counterup"
                  onClick={() => {
                    childcount < 6
                      ? setchildcount(childcount + 1)
                      : setchildcount(childcount);
                  }}
                >
                  +
                </div>
              </div>
            </div>
            <div className="optionsrow">
              <div className="ageinfo">
                <h5 style={{ fontWeight: "800" }}>Infants</h5>
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "10px",
                    color: "rgba(0,0,0,0.700)",
                  }}
                >
                  0-23 Months
                </h5>
              </div>
              <div className="counter">
                <div
                  className="counterdown"
                  onClick={() => {
                    infantcount > 0
                      ? setinfantcount(infantcount - 1)
                      : setinfantcount(0);
                  }}
                >
                  -
                </div>
                <div className="personcount">{infantcount}</div>
                <div
                  className="counterup"
                  onClick={() => {
                    infantcount < 6 && infantcount < adultcount
                      ? setinfantcount(infantcount + 1)
                      : setinfantcount(infantcount);
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelerModal;
