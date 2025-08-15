import React, { useState } from "react";
import { FaArrowLeft, FaSearch, FaEye } from "react-icons/fa";

const directionData = [
  { direction: "Tidel Park to SIPCOT", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2 },
  { direction: "SIPCOT to Tidel Park", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2 },
];

function RideDirection({ routeName, onBack, onViewHotspot }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = directionData.filter(row =>
    row.direction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex align-items-center mb-2 mt-4">
        {/* Back button */}
        <FaArrowLeft
          style={{ cursor: "pointer", marginRight: 10 }}
          onClick={onBack}
        />
        <h4 className="fw-semibold fs-20 mb-0 nav-path">
          <span style={{ color: "grey", fontWeight: "bold" }}>
            Live Demand &nbsp; &gt; Routes &nbsp; &gt;
          </span>{" "}
          Directions
        </h4>
      </div>

      <div
        className="d-flex align-items-center justify-content-start gap-4 mb-3 mt-4 flex-wrap"
        style={{ flexWrap: "wrap", rowGap: "10px" }}
      >
        <div className="position-relative" style={{ flex: "1 1 250px", maxWidth: "1000px" }}>
          <FaSearch
            className="position-absolute"
            style={{ top: 12, left: 12, color: "#888" }}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
            style={{ borderRadius: 10, width: "100%" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select className="form-select" style={{ borderRadius: 10, maxWidth: 150 }}>
          <option>This Month</option>
        </select>

        <div className="fw-bold fs-5 border px-3 py-2 rounded-3">
          Total Count : {filteredData.length}
        </div>
      </div>

      <div className="table-responsive">
        <table
          className="table mb-0"
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            borderCollapse: "separate",
            borderSpacing: 0,
            overflow: "hidden",
          }}
        >
          <thead
            className="table-secondary"
            style={{ backgroundColor: "#f8f9fa", borderBottom: "1px solid #ccc" }}
          >
            <tr>
              <th style={{ padding: 12, border: "none" }}>Action</th>
              <th style={{ padding: 12, border: "none" }}>Direction</th>
              <th style={{ padding: 12, border: "none" }}>Live Ride Request</th>
              <th style={{ padding: 12, border: "none" }}>Paired</th>
              <th style={{ padding: 12, border: "none" }}>Waiting for Driving Assigning</th>
              <th style={{ padding: 12, border: "none" }}>Waiting for Driver Arrival</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    padding: 12,
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  <FaEye
                    style={{ cursor: "pointer" }}
                    onClick={() => onViewHotspot(row)}
                  />
                </td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc" }}>{row.direction}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.liveRideRequest}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.paired}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.waitingForDrivingAssigning}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.waitingForDriverArrival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RideDirection;
