import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import Sendonebyone from "../assets/send-one-by-one.png";
import Sendtomany from "../assets/send-to-all.png";

const DriverAlgorithm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [assignmentMethod, setAssignmentMethod] = useState("sendToAll");
  const [assignmentTime, setAssignmentTime] = useState(30);

  const handleSave = () => {
    console.log("Saving driver algorithm settings:", {
      assignmentMethod,
      assignmentTime
    });
    // Add your save logic here
  };

  return (
    <div
      className="p-4 pt-2 bg-white"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      {/* Header */}
      <hr />
      <div className="mb-4">
        <h2
          className="fw-bold mb-0"
          style={{ color: "#333", fontSize: "24px" }}
        >
          Driver Algorithm
        </h2>
      </div>

      {/* Search and Add Button */}
      <div className="d-flex align-items-center justify-content-between mb-4 gap-3">
        <div
          className="position-relative"
          style={{ flex: "1", maxWidth: "800px" }}
        >
          <FaSearch
            className="position-absolute"
            style={{ top: 12, left: 12, color: "#999" }}
            size={16}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: 10,
              border: "1px solid #ddd",
              fontSize: 14,
              backgroundColor: "white"
            }}
          />
        </div>

        <button
          className="btn btn-outline-secondary d-flex align-items-center gap-2"
          style={{
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            padding: "8px 16px",
            marginRight: "0px",
            backgroundColor: "white"
          }}
        >
          <FaPlus size={16} /> {/* Using FaPlus from react-icons/fa */}
          Add
        </button>
      </div>

      {/* Main rounded container */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "0px",
          backgroundColor: "#fafbfe",
          borderRadius: "28px",
          padding: "40px 34px 40px 34px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Algorithm Selection Cards */}
        <div
          style={{
            display: "flex",
            gap: "38px",
            width: "100%",
            
            marginBottom: "30px"
          }}
        >
          {/* Send to All Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <div
              style={{
                width: "260px",
                height: "219px",
                
                borderRadius: "16px",
                border: "none",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => setAssignmentMethod("sendToAll")}
            >
              <img
                src={Sendtomany}
                alt="Send to All Algorithm"
                style={{
                  width: "94%",
                  height: "90%",
                  objectFit: "contain"
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "16px"
              }}
            >
              <span
                style={{ marginRight: "6px", color: "#000", fontWeight: 500 }}
              >
                Send to All
              </span>
              <span
                onClick={() => setAssignmentMethod("sendToAll")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "2.2px solid #222",
                  marginLeft: "8px",
                  background:
                    assignmentMethod === "sendToAll" ? "#111" : "#fff",
                  cursor: "pointer"
                }}
              >
                {assignmentMethod === "sendToAll" && (
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1",
                      marginTop: "-1px"
                    }}
                  >
                    ✔
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Send One by One Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <div
              style={{
                width: "260px",
                height: "219px",
                
                borderRadius: "16px",
                border: "none",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => setAssignmentMethod("sendOneByOne")}
            >
              <img
                src={Sendonebyone}
                alt="Send One by One Algorithm"
                style={{
                  width: "94%",
                  height: "90%",
                  objectFit: "contain"
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "16px"
              }}
            >
              <span
                style={{ marginRight: "6px", color: "#222", fontWeight: 500 }}
              >
                Send one by one
              </span>
              <span
                onClick={() => setAssignmentMethod("sendOneByOne")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  border: "2.2px solid #222",
                  marginLeft: "8px",
                  background:
                    assignmentMethod === "sendOneByOne" ? "#111" : "#fff",
                  cursor: "pointer"
                }}
              >
                {assignmentMethod === "sendOneByOne" && (
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1",
                      marginTop: "-1px"
                    }}
                  >
                    ✔
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Assignment Time */}
        <div className="mb-4" style={{ width: "100%", marginTop: 25 }}>
          <label
            className="form-label fw-medium mb-2"
            style={{ fontSize: 20, color: "#000000",fontWeight:"bolder" }}
          >
            Assignment Time (in Seconds)
          </label>
          <input
            type="number"
            className="form-control"
            value={assignmentTime}
            onChange={(e) => setAssignmentTime(Number(e.target.value))}
            style={{
              maxWidth: "350px",
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 16,
              backgroundColor: "white"
            }}
          />
        </div>

        {/* Save Button */}
        <button
          className="btn btn-dark"
          onClick={handleSave}
          style={{
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 500,
            padding: "10px 24px",
            marginTop: "4px"
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DriverAlgorithm;
