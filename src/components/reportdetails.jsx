import React, { useState } from "react";
import { FaSearch, FaEye, FaArrowLeft } from "react-icons/fa";
import HotspotDetails from "./hotspotdetails"; // ✅ import Hotspot component

const ReportDetails = ({ onBack, setActive }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHotspot, setSelectedHotspot] = useState(null); // ✅ track which row is clicked

  const directionsData = [
    {
      direction: "Tidel Park and SIPCOT",
      totalRequest: 10,
      paired: 6,
      completed: 6,
      cancelled: 6,
      avgWait: "2 Minutes",
    },
    {
      direction: "Thiruvanmiyur and ECR",
      totalRequest: 10,
      paired: 6,
      completed: 6,
      cancelled: 6,
      avgWait: "2 Minutes",
    },
  ];

  const filteredData = directionsData.filter((row) =>
    row.direction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ If a hotspot is selected, show HotspotDetails instead of the table
  if (selectedHotspot) {
    return (
      <HotspotDetails
        data={selectedHotspot}
        onBack={() => setSelectedHotspot(null)} // back to ReportDetails
      />
    );
  }

  return (
    <div className="p-4 pt-2 bg-white">
      <hr />

      {/* Back Button + Title */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <FaArrowLeft
          style={{ cursor: "pointer", fontSize: 22, color: "grey" }}
          onClick={() => {
            
            onBack();
          }}
        />




        <div style={{ fontSize: 22, fontWeight: "bold" }}>
          <span style={{ color: "grey", fontWeight: "bold" }}>
            Previous Reports &nbsp; &gt; &nbsp;
          </span>{" "}
          Direction
        </div>
      </div>

      {/* Search + Filters */}
       <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
              <div className="position-relative" style={{ flex: "1 1 250px", maxWidth: "1000px" }}>
                <FaSearch
                  className="position-absolute"
                  style={{ top: 12, left: 12, color: "#888"}}
                />
                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
      
              <select className="form-select" style={{ maxWidth: 150 }}>
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
    className="table"
    style={{
      border: "1px solid #ccc", // outer border
      borderCollapse: "collapse", // collapse table for cleaner outer border
      width: "100%",
    }}
  >
    <thead className="table-secondary">
      <tr>
        <th style={{ padding: "12px" }}>Action</th>
        <th style={{ padding: "12px" }}>Direction</th>
        <th style={{ padding: "12px" }}>Total Ride Request</th>
        <th style={{ padding: "12px" }}>Paired</th>
        <th style={{ padding: "12px" }}>Completed Rides</th>
        <th style={{ padding: "12px" }}>Cancelled Rides</th>
        <th style={{ padding: "12px" }}>Average Waiting Time</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.map((row, idx) => (
        <tr key={idx}>
          <td className="text-center" style={{ padding: "12px" }}>
            <FaEye
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedHotspot(row)}
            />
          </td>
          <td style={{ padding: "12px" }}>{row.direction}</td>
          <td className="text-center" style={{ padding: "12px" }}>{row.totalRequest}</td>
          <td className="text-center" style={{ padding: "12px" }}>{row.paired}</td>
          <td className="text-center" style={{ padding: "12px" }}>{row.completed}</td>
          <td className="text-center" style={{ padding: "12px" }}>{row.cancelled}</td>
          <td className="text-center" style={{ padding: "12px" }}>{row.avgWait}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default ReportDetails;
