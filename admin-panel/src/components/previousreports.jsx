import React, { useState } from "react";
import { FaSearch, FaEye } from "react-icons/fa";

const PreviousReports = ({ onViewReport }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const reportsData = [
    {
      route: "Tidel Park and SIPCOT",
      totalRequest: 10,
      paired: 6,
      completed: 6,
      cancelled: 6,
      avgWait: "2 Minutes",
    },
    {
      route: "Thiruvanmiyur and ECR",
      totalRequest: 10,
      paired: 6,
      completed: 6,
      cancelled: 6,
      avgWait: "2 Minutes",
    },
  ];

  const filteredData = reportsData.filter((row) =>
    row.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-2 bg-white">
        <hr />
      <h4 className="fw-semibold mb-3">Previous Reports</h4>

      {/* Search and filters */}
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
        <th style={{ border: "none" }}>Action</th>
        <th style={{ border: "none" }}>Route Name</th>
        <th style={{ border: "none" }}>Total Ride Request</th>
        <th style={{ border: "none" }}>Paired</th>
        <th style={{ border: "none" }}>Completed Rides</th>
        <th style={{ border: "none" }}>Cancelled Rides</th>
        <th style={{ border: "none" }}>Average Waiting Time</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.map((row, idx) => (
        <tr key={idx}>
          <td style={{ border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>
            <FaEye
              style={{ cursor: "pointer" }}
              onClick={() => onViewReport(row)}
            />
          </td>
          <td style={{ padding:"12px" ,border: "none", borderBottom: "1px solid #ccc" }}>{row.route}</td>
          <td style={{ padding:"12px" ,border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.totalRequest}</td>
          <td style={{ padding:"12px" ,border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.paired}</td>
          <td style={{ padding:"12px" ,border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.completed}</td>
          <td style={{ padding:"12px" ,border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.cancelled}</td>
          <td style={{ padding:"12px" ,border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.avgWait}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default PreviousReports;
