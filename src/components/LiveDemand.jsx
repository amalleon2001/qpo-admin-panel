import React, { useState } from "react";
import { FaSearch, FaEye } from "react-icons/fa";

const LiveDemand = ({ setActive, onViewDirection }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const liveDemandData = [
    {
      route: "Tidel Park and SIPCOT",
      liveRideRequest: 10,
      paired: 6,
      waitingForDriverAssigning: 4,
      waitingForDriverArrival: 2,
    },
    {
      route: "Thirunvanmiur and ECR",
      liveRideRequest: 10,
      paired: 6,
      waitingForDriverAssigning: 4,
      waitingForDriverArrival: 2,
    },
    {
      route: "Tidel Park and SIPCOT",
      liveRideRequest: 10,
      paired: 6,
      waitingForDriverAssigning: 4,
      waitingForDriverArrival: 2,
    },
    {
      route: "Tidel Park and SIPCOT",
      liveRideRequest: 10,
      paired: 6,
      waitingForDriverAssigning: 4,
      waitingForDriverArrival: 2,
    },
    {
      route: "Tidel Park and SIPCOT",
      liveRideRequest: 10,
      paired: 6,
      waitingForDriverAssigning: 4,
      waitingForDriverArrival: 2,
    },
    {
      route: "Tidel Park and SIPCOT",
      liveRideRequest: 10,
      paired: 6,
      waitingForDriverAssigning: 4,
      waitingForDriverArrival: 2,
    },
  ];

  const filteredData = liveDemandData.filter((row) =>
    row.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold fs-24 mb-0 mt-2 nav-path">Live Demand</h4>
      </div>

      {/* Search & Filters */}
      <div
        className="d-flex align-items-center justify-content-start gap-4 mb-3 flex-wrap"
        style={{ flexWrap: "wrap", rowGap: "10px" }}
      >
        <div
          className="position-relative"
          style={{ flex: "1 1 250px", maxWidth: "1000px" }}
        >
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
          <option>This Week</option>
          <option>Today</option>
        </select>

        <div className="fw-bold fs-5 border px-3 py-2 rounded-3">
          Total Count : {filteredData.length}
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table
          className="table mb-0"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            borderCollapse: "separate",
            borderSpacing: 0,
            overflow: "hidden",
          }}
        >
          <thead
            className="table-secondary"
            style={{
              backgroundColor: "#f8f9fa",
              borderBottom: "1px solid #ccc",
            }}
          >
            <tr>
              <th style={{ padding: "12px", border: "none", color: "#363636" }}>
                Action
              </th>
              <th style={{ padding: "12px", border: "none", color: "#363636" }}>
                Route Name
              </th>
              <th style={{ padding: "12px", border: "none", color: "#363636" }}>
                Live Ride Request
              </th>
              <th style={{ padding: "12px", border: "none", color: "#363636" }}>
                Paired
              </th>
              <th style={{ padding: "12px", border: "none", color: "#363636" }}>
                Waiting for Driving Assigning
              </th>
              <th style={{ padding: "12px", border: "none", color: "#363636" }}>
                Waiting for Driver Arrival
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <FaEye
                    style={{ color: "#1C1B1F" }}
                    onClick={() => onViewDirection(row.route)}
                  />
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {row.route}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {row.liveRideRequest}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {row.paired}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {row.waitingForDriverAssigning}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {row.waitingForDriverArrival}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveDemand;
