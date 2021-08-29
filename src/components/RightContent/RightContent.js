import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./RightContent.css";
import calender from "./Assets/calender.png";
import Holidays from "../Holidays/Holidays";

const RightContent = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const Modal = ({ onRequestClose }) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
      function onKeyDown(event) {
        if (event.keyCode === 27) {
          // Close the modal when the Escape key is pressed
          onRequestClose();
        }
      }

      // Prevent scolling
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);

      // Clear things up when unmounting this component
      return () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", onKeyDown);
      };
    });

    const onDrop = useCallback((acceptedFiles) => {
      // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div className="modal__backdrop">
        <div className="modal__container">
          <div style={{ display: "flex" }}>
            <div className="left">
              <h3 className="modal__title">Add New Holiday</h3>
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Type" />
              <input type="text" placeholder="Date" />
            </div>
            <div className="right">
              <p style={{ color: "#90919B", fontFamily: "Roboto" }}>
                Download sample in{" "}
                <p style={{ color: "#FEA101", display: "inline" }}>
                  .csv format
                </p>{" "}
                file to ensure that you have the correct file ready to import
              </p>
              <div {...getRootProps()} className="drag-drop">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div>
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                    <button>Click here</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button type="button" onClick={onRequestClose}>
            Close this modal
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="right-content">
      <div className="heading">
        <div className="holidays">
          <h1>Holiday</h1>
          <p style={{ marginBottom: "50px" }}>
            Assign the holidays that you want to give to your employee for the
            year
          </p>
        </div>
        <div className="year">
          <img src={calender} alt="calender" />
          <p style={{ marginRight: "20px" }}>Year</p>
          <p style={{ fontWeight: "bold", marginRight: "20px" }}>2021</p>
        </div>
      </div>
      <div className="sub-heading">
        <h3>List</h3>
        <div className="sub-heading-right">
          <p onClick={toggleModal}>+ Add New</p>
        </div>
      </div>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      <Holidays />
    </div>
  );
};

export default RightContent;
