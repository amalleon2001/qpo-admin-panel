import React, { useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const HotspotDetails = ({ direction, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const hotspotData = [
    { hotspot: "Gandhi Road", totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: "2 Minutes" },
    { hotspot: "AGS Navalur", totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: "2 Minutes" },
    { hotspot: "Baby Nagar", totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: "2 Minutes" },
    { hotspot: "Bharathi Nagar", totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: "2 Minutes" },
    { hotspot: "Dollar Accenture", totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: "2 Minutes" },
    { hotspot: "IGP", totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: "2 Minutes" },
  ];

  const filteredData = hotspotData.filter((row) =>
    row.hotspot.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-2 bg-white">
      <hr />

      {/* Breadcrumb + Back */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <FaArrowLeft
          style={{ cursor: "pointer", fontSize: 22, color: "grey" }}
          onClick={onBack}
        />
        <div style={{ fontSize: 22, fontWeight: "bold" }}>
          <span style={{ color: "grey", fontWeight: "bold" }}>
            Previous Reports &nbsp; &gt; &nbsp; Direction &nbsp; &gt; &nbsp;
          </span>{" "}
          Hotspot
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
     <table
  className="table"
  style={{
    borderCollapse: "collapse",
    width: "100%",
    border: "1px solid #ccc",   // ✅ outer border
  }}
>
  <thead className="table-secondary">
    <tr>
      <th style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>Hotspot</th>
      <th style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>Total Ride Request</th>
      <th style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>Paired</th>
      <th style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>Completed Rides</th>
      <th style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>Cancelled Rides</th>
      <th style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>Average Waiting Time for Pairing</th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((row, idx) => (
      <tr key={idx}>
        <td style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>{row.hotspot}</td>
        <td className="text-center" style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>{row.totalRequest}</td>
        <td className="text-center" style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>{row.paired}</td>
        <td className="text-center" style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>{row.completed}</td>
        <td className="text-center" style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>{row.cancelled}</td>
        <td className="text-center" style={{ borderBottom: "1px solid #ccc", padding: "12px" }}>{row.avgWait}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    
  );
};

export default HotspotDetails;
