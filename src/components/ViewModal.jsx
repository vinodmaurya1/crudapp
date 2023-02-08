import React, { useState, useEffect } from "react";

const ViewModal = () => {

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
    <div 
    className="modal fade"
    id="viewModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div  className="modal-dialog modal-lg">
      <div className="modal-content">
        <div
          className="modal-header"
          style={{
            backgroundColor: "#F33823",
            color: "white",
          }}
        >
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            Staudent Information
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
            {fetchData.map((getD) => (
              <tr key={getD.rollNo}>
                <td>{getD.firstName}</td>
                <td>{getD.firstName}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ViewModal;
