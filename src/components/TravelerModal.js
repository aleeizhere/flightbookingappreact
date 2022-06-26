import React from "react";
import "./travelermodal.css"

const TravelerModal = ({ showmodal }) => {
  if (showmodal === true) {
    return (
      <>
        <div className="modalcontainer">
          <h4>Im the modal</h4>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default TravelerModal;
