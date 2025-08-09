import React from "react";
import { FaSearch } from "react-icons/fa";

const RefillingTrip = () => {
  const refilling = [
    {
      tripId: "T0001",
      pairId: "P2313",
      ride1: "R0001",
      ride2: "R0007",
      ride3: "R0013",
      seats: 3,
      route: "Tidel Park to SIPCOT",
      driverId: "AUTO_0001",
    },
    {
      tripId: "T0002",
      pairId: "P2314",
      ride1: "R0002",
      ride2: "R0008",
      ride3: "R0014",
      seats: 3,
      route: "Tidel Park to SIPCOT",
      driverId: "AUTO_0001",
    },
    {
      tripId: "T0003",
      pairId: "P2315",
      ride1: "R0003",
      ride2: "R0009",
      ride3: "R0015",
      seats: 3,
      route: "Tidel Park to SIPCOT",
      driverId: "AUTO_0001",
    },
    {
      tripId: "T0004",
      pairId: "P2316",
      ride1: "R0004",
      ride2: "R0010",
      ride3: "R0016",
      seats: 3,
      route: "Tidel Park to SIPCOT",
      driverId: "AUTO_0001",
    },
    {
      tripId: "T0005",
      pairId: "P2317",
      ride1: "R0005",
      ride2: "R0011",
      ride3: "R0017",
      seats: 3,
      route: "Tidel Park to SIPCOT",
      driverId: "AUTO_0001",
    },
    {
      tripId: "T0006",
      pairId: "P2318",
      ride1: "R0006",
      ride2: "R0012",
      ride3: "R0018",
      seats: 3,
      route: "Tidel Park to SIPCOT",
      driverId: "AUTO_0001",
    },
  ];

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold fs-20 mb-0 nav-path"><span style={{color:"grey", fontWeight:"bold"} }>Live Pairing   &gt;</span>   Refilling Trip</h4>
        <div className="fw-bold fs-5 border px-3 py-2 rounded-3">
          Total Count : 1150
        </div>
      </div>

      {/* Search and Filters */}
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
          />
        </div>

        <select
          className="form-select"
          style={{ borderRadius: 10, maxWidth: 150 }}
        >
          <option>All Status</option>
        </select>

        <select
          className="form-select"
          style={{ borderRadius: 10, maxWidth: 150 }}
        >
          <option>This Month</option>
        </select>
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
              backgroundColor: "#ffffffff",
              borderBottom: "1px solid #ccc",
            }}
          >
            <tr>
              <th style={{ padding: "12px", border: "none", width:"160px" }}>Ongoing Trip ID</th>
              <th style={{ padding: "12px", border: "none" }}>Pair ID</th>
              <th style={{ padding: "12px", border: "none" }}>Ride ID 1</th>
              <th style={{ padding: "12px", border: "none" }}>Ride ID 2</th>
              <th style={{ padding: "12px", border: "none" }}>Ride ID 3</th>
              <th style={{ padding: "12px", border: "none" }}> Seats Combined </th>
              <th style={{ padding: "12px", border: "none" }}>Route</th>
              <th style={{ padding: "12px", border: "none" }}>Driver ID</th>
            </tr>
          </thead>
          <tbody>
            {refilling.map((trip, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "12px",
                    textAlign: "center",
                    
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    
                  }}
                >
                  {trip.tripId}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                   
                  }}
                >
                  {trip.pairId}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    
                  }}
                >
                  {trip.ride1}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {trip.ride2}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {trip.ride3}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {trip.seats}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                   
                   
                  }}
                >
                  {trip.route}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {trip.driverId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefillingTrip;
