import React from "react";
import "./travelermodal.css";

const TravelerModal = ({ showmodal }) => {
  if (showmodal === true) {
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

              <label htmlFor="econ" className="econ">
                <div className="labelcontainer">
                  <h5>Economy</h5>
                </div>
              </label>

              <label htmlFor="bus" className="bus">
                <div className="labelcontainer bus">
                  <h5>Business</h5>
                </div>
              </label>

              <label htmlFor="peco" className="peco">
                <div className="labelcontainer peco">
                  <h5>Premium Economy</h5>
                </div>
              </label>

              <label htmlFor="fclass" className="fclass">
                <div className="labelcontainer fclass">
                  <h5>First Class</h5>
                </div>
              </label>

              {/*  */}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default TravelerModal;
