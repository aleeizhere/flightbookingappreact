import React from "react";
import UserInfo from "../components/UserInfo";
import Availableflight from "../components/Availableflight";
import availableflightAPI from "../availableflightAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const System = () => {
  // creating the state function to update the rendered components conditionally
  /*
  const [currstate, changestate] = useState(1);
  const updatestate = (newstate) => {
    changestate(newstate);
  };
  */

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="system-container">
                <UserInfo />
              </div>
            }
          ></Route>
          <Route
            path="/registration"
            element={<Availableflight resultset={availableflightAPI} />}
          >
            ;
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default System;
