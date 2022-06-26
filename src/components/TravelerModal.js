import React from "react";

const TravelerModal = (showmodal) => {
  if (showmodal) {
    return (
      <>
        <div className="modalcontainer">
          <h2>Im the modal</h2>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default TravelerModal;
