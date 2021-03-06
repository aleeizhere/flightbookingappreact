import React, { useState } from "react";
import "./userinfo.css";
import { useNavigate } from "react-router-dom";
import availableflightAPI from "../availableflightAPI";
import Tofrom from "./Tofrom";
import TravelerModal from "./TravelerModal";

const UserInfo = ({ setuserdata }) => {
  const navigate = useNavigate();
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
  let [locationvaluefrom, setvaluefrom] = useState("");
  let [locationvalueto, setvalueto] = useState("");
  let [showerrorvalue, seterrorvalue] = useState("hidewronginput");
  let [showmodal, setshowmodal] = useState(false);
  let [adultcount, setadultcount] = useState(1);
  let [childcount, setchildcount] = useState(0);
  let [infantcount, setinfantcount] = useState(0);
  let [seattype, setseattype] = useState("Economy");
  let [travval, settravval] = useState(
    `${seattype} | ${adultcount} Adults, ${childcount} Children, ${infantcount} Infants`
  );
  let userdata = {
    clientfrom: locationvaluefrom,
    clientto: locationvalueto,
    adults: adultcount,
    child: childcount,
    infant: infantcount,
    type: seattype,
  };
  function rendertravelmodal(displayval) {
    if (displayval) {
      return (
        <TravelerModal
          adultcount={adultcount}
          setadultcount={setadultcount}
          childcount={childcount}
          setchildcount={setchildcount}
          infantcount={infantcount}
          setinfantcount={setinfantcount}
          setseattype={setseattype}
          seattype={seattype}
          settravval={settravval}
        />
      );
    }
  }
  // rendertravelmodal sirf jab hi run hoga jb showmodal ka state variable change hoga
  // useEffect(rendertravelmodal(showmodal), [showmodal]);
  const setlocationvalue = (event) => {
    setvaluefrom(event.target.innerText);
    inputfrom([]);
  };
  const setlocationvalueto = (event) => {
    setvalueto(event.target.innerText);
    inputto([]);
  };

  const flyingfrominput = (event) => {
    setvaluefrom(event.target.value); //hrr change pe locationvaluefrom ko update krega jo neeche se input tag ki value ko update krega
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
    setvalueto(event.target.value);
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
  // ek aisa function chahie jo check kray whether the value in to and from is coming from the list of avaialable flights
  const checkinput = () => {
    if (
      availableflightsfrom.includes(locationvaluefrom) &&
      availableflightsto.includes(locationvalueto)
    ) {
      if (locationvaluefrom === locationvalueto) {
        seterrorvalue("showwronginput");
        setTimeout(() => {
          seterrorvalue("hidewronginput");
        }, 2000);
      } else {
        setuserdata(userdata);
        navigate("/registration");
      }
    } else {
      seterrorvalue("showwronginput");
      setTimeout(() => {
        seterrorvalue("hidewronginput");
      }, 2000);
    }
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
            <span className="label">Travelers</span>
            <input
              required
              type="text"
              onClick={() => {
                setshowmodal(!showmodal);
              }}
              readOnly
              value={travval}
            />
            {rendertravelmodal(showmodal)}
          </div>
        </div>
        <div className="row2">
          <div className="inputfields lg">
            <span className="label">Date of travel</span>

            <input required type="date" />
          </div>
        </div>
      </div>
      <span className="underline"></span>
      <div className={`hidewronginput ${showerrorvalue}`}>
        <h3>Wrong Input</h3>
        <h5>Make sure your inputs are from available options</h5>
      </div>
      <button className="submitbutton" onClick={checkinput}>
        Search
      </button>
    </>
  );
};

export default UserInfo;
