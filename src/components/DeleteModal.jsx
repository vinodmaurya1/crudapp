import React, { useState, useEffect } from "react";

const DeleteModal = () => {

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
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title fs-5" id="exampleModalLabel">
              Are you sure you want to delete this item
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#F33823", color: "white" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
