import React, { useState, useEffect } from "react";
import Aside from "./Aside";
import deleteLogo from "../image/deleteLogo.png";
import editLogo from "../image/editLogo.png";
import viewLogo from "../image/viewLogo.png";
import { Link } from "react-router-dom";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const StudentData = () => {
  function now() {
    return new Date();
  }
  const currentDateTime = new Date();
  const DateText = currentDateTime.toDateString();
  const timeText = currentDateTime.toLocaleTimeString();

  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost/logobackend/api.php");
      const getAllData = await res.json();
      setFetchData(getAllData);
      // console.log(getAllData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="stdTitle my-3 d-flex justify-content-between">
        Manage Student
        <span>
          {DateText},{timeText}
        </span>
      </div>
      <div className="d-flex justify-content-between">
        <aside>
          <ul className="nav flex-column" style={{ marginTop: "-8px" }}>
            <li className="nav-item">
              <Link
                className="my-2 addStd btn  "
                type="button"
                aria-current="page"
                to="/"
              >
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className=" my-2 mngStd btn activeBtn"
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
        <div className="studantData">
          <table className="table mx-3 table-borderless">
            <thead>
              <tr>
                <th className="col-md-4" scope="col">
                  Name
                </th>
                <th className="col-md-4" scope="col">
                  Class
                </th>
                <th className="col-md-4" scope="col">
                  Roll No.
                </th>
                <th className="col-md-4" scope="col">
                  View/Edit/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((getD) => (
                <tr key={getD.sno} className="tableHover">
                  <th scope="row">
                    {getD.firstName} {getD.middleName} {getD.lastName}{" "}
                  </th>
                  <td>
                    {getD.stdClass}-{getD.stdDivision}
                  </td>
                  <td>{getD.rollNo}</td>
                  <td>
                    <img
                      className="mx-2"
                      src={viewLogo}
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#viewModal"
                    />
                   <ViewModal/>
                    <img
                      className="mx-2"
                      src={editLogo}
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                    />
                    <EditModal />
                    <img
                      className="mx-2"
                      src={deleteLogo}
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    />
                    <DeleteModal />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentData;
