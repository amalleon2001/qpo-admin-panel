import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const hotspotData = [
  { hotspot: "Gandhi Road", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: "2 Minutes" },
  { hotspot: "AGS Navallur", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: "2 Minutes" },
  { hotspot: "Baby Nagar", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: "2 Minutes" },
  { hotspot: "Bharathi Nagar", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: "2 Minutes" },
  { hotspot: "Dollar Accenture", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: "2 Minutes" },
  { hotspot: "IGP", liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: "2 Minutes" },
];

function HotspotTable({ onBack }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = hotspotData.filter(row =>
    row.hotspot.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-0 bg-white">
        <hr />
      <div className="d-flex align-items-center mb-3">
        {/* Back button */}
        <FaArrowLeft
          style={{ cursor: "pointer", marginRight: 10 }}
          onClick={onBack}
        />
        <h4 className="fw-semibold fs-20 mb-0 nav-path">
          <span style={{ color: "grey", fontWeight: "bold" }}>
            Live Demand &nbsp; &gt; Routes &nbsp; &gt;Directions &nbsp; &gt;
          </span>{" "}
          Hotspot
        </h4>
      </div>

      <div className="d-flex align-items-center mb-3" style={{ gap: 12 }}>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          style={{ maxWidth: 330, borderRadius: 10 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="form-select" style={{ borderRadius: 10, width: 130, fontSize: 15 }}>
          <option>This Month</option>
        </select>
        <div className="fw-bold fs-5 border px-3 py-2 rounded-3 bg-white" style={{ minWidth: 140, textAlign: "center" }}>
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
            fontSize: 15,
          }}
        >
          <thead style={{ backgroundColor: "#f4f4f4" }}>
            <tr>
              <th style={{ padding: 12 }}>Hotspot</th>
              <th style={{ padding: 12 }}>Live Ride Request</th>
              <th style={{ padding: 12 }}>Paired</th>
              <th style={{ padding: 12 }}>Waiting for Driving Assigning</th>
              <th style={{ padding: 12 }}>Waiting for Driver Arrival</th>
              <th style={{ padding: 12 }}>Average waiting Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc" }}>{row.hotspot}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.liveRideRequest}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.paired}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.waitingForDrivingAssigning}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.waitingForDriverArrival}</td>
                <td style={{ padding: 12, border: "none", borderBottom: "1px solid #ccc", textAlign: "center" }}>{row.averageWaitingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotspotTable;
