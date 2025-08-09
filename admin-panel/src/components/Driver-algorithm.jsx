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
    <div className="p-4 bg-white" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-0" style={{ color: "#333", fontSize: "24px" }}>
          Driver Algorithm
        </h2>
      </div>

      {/* Search and Add Button */}
      <div className="d-flex align-items-center justify-content-between mb-4 gap-3">
        <div className="position-relative" style={{ flex: "1", maxWidth: "400px" }}>
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
              borderRadius: 25,
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
            backgroundColor: "white"
          }}
        >
          <FaPlus size={16} /> {/* Using FaPlus from react-icons/fa */}
          Add
        </button>
      </div>

      {/* Algorithm Selection Cards */}
      <div className="row g-3 mb-4">
        {/* Send to All Card */}
        <div className="col-md-6">
          <div 
            className={`card h-100 ${assignmentMethod === 'sendToAll' ? 'border-primary' : ''}`}
            style={{ 
              cursor: "pointer",
              borderRadius: 12,
              backgroundColor: "white",
              border: assignmentMethod === 'sendToAll' ? '2px solid #007bff' : '1px solid #dee2e6'
            }}
            onClick={() => setAssignmentMethod('sendToAll')}
          >
            <div className="card-body p-4">
              {/* Illustration for Send to All */}
              <div className="text-center mb-3" style={{ height: "120px", position: "relative" }}>
                <img 
                  src={Sendtomany}
                  alt="Send to All Algorithm"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain"
                  }}
                />
              </div>
              
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="assignmentMethod"
                  value="sendToAll"
                  checked={assignmentMethod === 'sendToAll'}
                  onChange={(e) => setAssignmentMethod(e.target.value)}
                  className="me-2"
                />
                <span style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>
                  Send to All
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Send One by One Card */}
        <div className="col-md-6">
          <div 
            className={`card h-100 ${assignmentMethod === 'sendOneByOne' ? 'border-primary' : ''}`}
            style={{ 
              cursor: "pointer",
              borderRadius: 12,
              backgroundColor: "white",
              border: assignmentMethod === 'sendOneByOne' ? '2px solid #007bff' : '1px solid #dee2e6'
            }}
            onClick={() => setAssignmentMethod('sendOneByOne')}
          >
            <div className="card-body p-4">
              {/* Illustration for Send One by One */}
              <div className="text-center mb-3" style={{ height: "120px", position: "relative" }}>
                <img 
                  src={Sendonebyone}
                  alt="Send One by One Algorithm"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain"
                  }}
                />
              </div>
              
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="assignmentMethod"
                  value="sendOneByOne"
                  checked={assignmentMethod === 'sendOneByOne'}
                  onChange={(e) => setAssignmentMethod(e.target.value)}
                  className="me-2"
                />
                <span style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>
                  Send one by one
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Time */}
      <div className="mb-4">
        <label className="form-label fw-medium mb-2" style={{ fontSize: 16, color: "#333" }}>
          Assignment Time (in Seconds)
        </label>
        <input
          type="number"
          className="form-control"
          value={assignmentTime}
          onChange={(e) => setAssignmentTime(Number(e.target.value))}
          style={{
            maxWidth: "200px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 14,
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
          fontSize: 14,
          fontWeight: 500,
          padding: "10px 24px"
        }}
      >
        Save
      </button>
    </div>
  );
};

export default DriverAlgorithm;
