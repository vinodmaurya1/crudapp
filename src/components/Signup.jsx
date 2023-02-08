import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  function now() {
    return new Date();
  }
  const currentDateTime = new Date();
  const DateText = currentDateTime.toDateString();
  const timeText = currentDateTime.toLocaleTimeString();

  const [credentials, setCredentials] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    stdClass: "",
    stdDivision: "",
    rollNo: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData ={
      firstName: credentials.firstName,
      middleName: credentials.middleName,
      lastName: credentials.lastName,
      stdClass: credentials.stdClass,
      stdDivision: credentials.stdDivision,
      rollNo: credentials.rollNo,
      address1: credentials.address1,
      address2: credentials.address2,
      city: credentials.city,
      state: credentials.state,
      pinCode: credentials.pinCode,
    }
    axios.post('http://localhost:80/logobackend/',sendData)
    setCredentials({
      firstName: "",
      middleName: "",
      lastName: "",
      stdClass: "",
      stdDivision: "",
      rollNo: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pinCode: "",
    })
    console.log(credentials);
  };






  return (
    <>
      <div className="stdTitle my-3 d-flex justify-content-between">
        Add Student
        <span style={{marginRight:"40px"}}>
          {DateText},{timeText}
        </span>
      </div>
      <div className="d-flex homeContant justify-content-between">
        <aside>
          <ul className="nav flex-column" style={{ marginTop: "-8px" }}>
            <li className="nav-item">
              <Link
                className="my-2 addStd btn activeBtn  "
                type="button"
                aria-current="page"
                to="/"
              >
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className=" my-2 mngStd btn "
                type="button"
                aria-current="page"
                to="/managestudent"
              >
                Manage Students
              </Link>
            </li>
            <li className="nav-item">
              <button
                className=" my-2 btn logoutBtn"
                type="button"
                aria-current="page"
                href="#"
              >
                Log out
              </button>
            </li>
          </ul>
        </aside>

        <section>
          <form className="row g-3 mx-1" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <input  onChange={onChange}
                        name="firstName"
                        value={credentials.firstName}
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-md-4">
              <input onChange={onChange}
                        name="middleName"
                        value={credentials.middleName}
                type="text"
                className="form-control"
                placeholder="Middle name"
                aria-label="Middle name"
              />
            </div>
            <div className="col-md-4">
              <input onChange={onChange}
                        name="lastName"
                        value={credentials.lastName}
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div className="col-md-4">
              <select id="inputState" className="form-select" 
               onChange={onChange}
                        name="stdClass"
                        value={credentials.stdClass}>
                <option selected>Select Class</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>V</option>
                <option>VI</option>
                <option>VII</option>
                <option>VIII</option>
                <option>IX</option>
                <option>X</option>
                <option>XI</option>
                <option>XII</option>
              </select>
            </div>
            <div className="col-md-4">
              <select id="inputState" className="form-select"
               onChange={onChange}
               name="stdDivision"
               value={credentials.stdDivision}>
                <option selected>Select Division</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
              </select>
            </div>
            <div className="col-md-4">
              <input   onChange={onChange}
               name="rollNo"
               value={credentials.rollNo}
                type="text"
                className="form-control"
                placeholder="Enter Roll Number in Digits (Should be unique)"
                aria-label="Roll Number"
              />
            </div>

            <div className="col-6">
              <input onChange={onChange}
               name="address1"
               value={credentials.address1}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Address Line 1"
              />
            </div>
            <div className="col-6">
              <input onChange={onChange}
               name="address2"
               value={credentials.address2}
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Address Line 2"
              />
            </div>
            <div className="col-md-6">
              <input onChange={onChange}
               name="city"
               value={credentials.city}
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
              />
            </div>
            <div className="col-md-4">
              <select id="inputState" className="form-select"
              onChange={onChange}
              name="state"
              value={credentials.state}>
                <option selected>State</option>
                <option>Andhra Pradesh</option>
                <option>Andaman and Nicobar Islands </option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Chandigarh</option>
                <option>Dadra and Nagar Haveli and Daman & Diu</option>
                <option>Jammu & Kashmir</option>
                <option>Delhi</option>
                <option>Jharkhand</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Ladakh</option>
                <option>Lakshadweep</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Puducherry</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttarakhand</option>
                <option>Uttar Pradesh</option>
                <option>West Bengal</option>
              </select>
            </div>
            <div className="col-md-2">
              <input onChange={onChange}
               name="pinCode"
               value={credentials.pinCode}
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Pincode"
              />
            </div>
            <div className="col-12">
              <button
                style={{ width: "280px" }}
                type="submit"
                className="btn btnColor "
              >
                Add Student
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;
