import { React, useState } from "react";
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
  const [userdata, setuserdata] = useState("");
  console.log(userdata)
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="system-container">
                <UserInfo setuserdata={setuserdata} />
              </div>
            }
          ></Route>
          <Route
            path="/registration"
            element={<Availableflight resultset={availableflightAPI} userdata = {userdata} />}
          >
            ;
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default System;
