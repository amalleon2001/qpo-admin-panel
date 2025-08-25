import React from "react";
import { FaSearch } from "react-icons/fa";

const IdleDrivers = () => {
  const idleDriversData = [
    {
      tripId: "T0001",
      pairId: "P0001",
      numberOfRiders: 3,
      driverId: "AUTO_0001",
      driverName: "Bala Subramaniyam",
      route: "Tidel Park to SIPCOT",
      attempt: 1,
      assigned: "10:30",
    },
    {
      tripId: "T0002",
      pairId: "P0002",
      numberOfRiders: 3,
      driverId: "AUTO_0001",
      driverName: "Bala Subramaniyam",
      route: "Tidel Park to SIPCOT",
      attempt: 1,
      assigned: "10:30",
    },
    {
      tripId: "T0003",
      pairId: "P0003",
      numberOfRiders: 3,
      driverId: "AUTO_0001",
      driverName: "Bala Subramaniyam",
      route: "Tidel Park to SIPCOT",
      attempt: 1,
      assigned: "10:30",
    },
    {
      tripId: "T0004",
      pairId: "P0004",
      numberOfRiders: 3,
      driverId: "AUTO_0001",
      driverName: "Bala Subramaniyam",
      route: "Tidel Park to SIPCOT",
      attempt: 1,
      assigned: "10:30",
    },
    {
      tripId: "T0005",
      pairId: "P0005",
      numberOfRiders: 3,
      driverId: "AUTO_0001",
      driverName: "Bala Subramaniyam",
      route: "Tidel Park to SIPCOT",
      attempt: 1,
      assigned: "10:30",
    },
    {
      tripId: "T0006",
      pairId: "P0006",
      numberOfRiders: 3,
      driverId: "AUTO_0001",
      driverName: "Bala Subramaniyam",
      route: "Tidel Park to SIPCOT",
      attempt: 1,
      assigned: "10:30",
    },
  ];

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold fs-20 mb-0 nav-path">
          <span style={{ color: "grey", fontWeight: "bold" }}>
            Live Driver Assigning &gt;
          </span>{" "}
          Idle Drivers
        </h4>
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
              <th style={{ padding: "12px", border: "none" }}>Trip ID</th>
              <th style={{ padding: "12px", border: "none" }}>Pair ID</th>
              <th style={{ padding: "12px", border: "none" }}>Number of Riders</th>
              <th style={{ padding: "12px", border: "none" }}>Driver ID</th>
              <th style={{ padding: "12px", border: "none" }}>Driver Name</th>
              <th style={{ padding: "12px", border: "none" }}>Route</th>
              <th style={{ padding: "12px", border: "none" }}>Attempt</th>
              <th style={{ padding: "12px", border: "none" }}>Assigned</th>
            </tr>
          </thead>
          <tbody>
            {idleDriversData.map((driver, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {driver.tripId}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {driver.pairId}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {driver.numberOfRiders}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {driver.driverId}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {driver.driverName}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  {driver.route}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {driver.attempt}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  {driver.assigned}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IdleDrivers;