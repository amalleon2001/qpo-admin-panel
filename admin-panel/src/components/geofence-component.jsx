import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaArrowLeft, FaSearch } from "react-icons/fa";
import HotspotListView from "./hotspotlistview";

const DirectionDetails = ({ direction, onBack }) => (
  <div className="p-4">
    <button
      onClick={onBack}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "none",
        border: "none",
        color: "#007bff",
        fontSize: 18,
        cursor: "pointer",
        marginBottom: 16,
      }}
    >
      <FaArrowLeft />
      Back
    </button>
    <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
      Direction Details
    </h2>
    <div>
      <div style={{ marginBottom: 12 }}>
        <b>Direction:</b> {direction.name}
      </div>
      <div>
        <b>Total Drivers Tagged:</b> {direction.totalDrivers}
      </div>
    </div>
  </div>
);

const GeoFenceComponent = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [directions, setDirections] = useState([
    { id: 1, name: "Tidel Park and SIPCOT", totalDrivers: 10 },
    { id: 2, name: "Thirunvanmiur and ECR", totalDrivers: 10 },
  ]);
  const [viewingDirection, setViewingDirection] = useState(null);
  const [viewingHotspots, setViewingHotspots] = useState(false);

  const handleDelete = (id) => {
    setDirections(directions.filter((dir) => dir.id !== id));
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new direction name:");
    if (newName) {
      setDirections(
        directions.map((dir) =>
          dir.id === id ? { ...dir, name: newName } : dir
        )
      );
    }
  };

  const filteredDirections = directions.filter((dir) =>
    dir.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show HotspotListView when viewingHotspots is true
  if (viewingHotspots) {
    return <HotspotListView onBack={() => setViewingHotspots(false)} />;
  }

  // Show DirectionDetails if needed
  if (viewingDirection) {
    return (
      <DirectionDetails
        direction={viewingDirection}
        onBack={() => setViewingDirection(null)}
      />
    );
  }

  return (
    <div className="p-4 pt-2 bg-white">
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        <button
          onClick={onBack}
          aria-label="Back"
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: 0,
            marginRight: 6,
            fontSize: 22,
            color: "#000",
          }}
        >
          <FaArrowLeft />
        </button>
        <span style={{ color: "grey", fontWeight: "bold" }}>
          Geofence &gt;
        </span>
        <span style={{ color: "#000000", fontWeight: "bold" }}>Direction</span>
      </div>
      <div
        style={{
          background: "#fff",
          padding: "12px 16px",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <div style={{ position: "relative", flex: "1 1 300px", maxWidth: 1000 }}>
          <FaSearch
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#919191ff",
              pointerEvents: "none",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              padding: "8px 12px 8px 36px",
              borderRadius: 6,
              border: "1px solid #c6c6c6ff",
              fontSize: 16,
            }}
          />
        </div>
        <button
          onClick={() => alert("Add new direction")}
          style={{
            background: "#f4f4f4",
            color: "#222",
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: "7px 16px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          + Add Direction
        </button>
        <span
          style={{
            fontWeight: "bold",
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: "7px 16px",
            fontSize: 18,
            background: "#fff",
          }}
        >
          Total Count : {directions.length}
        </span>
      </div>
      <div
        style={{
          border: "1px solid #919191ff",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
          }}
        >
          <thead>
            <tr style={{ background: "#d9d9d9", color: "#444" }}>
              <th
                style={{ padding: "10px", fontWeight: 500, textAlign: "left" }}
              >
                Direction
              </th>
              <th
                style={{ padding: "10px", fontWeight: 500, textAlign: "left" }}
              >
                Total Drivers Tagged
              </th>
              <th
                style={{ padding: "10px", fontWeight: 500, textAlign: "left" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDirections.map((dir) => (
              <tr
                key={dir.id}
                style={{ borderBottom: "1px solid #e4e4e4", background: "#fff" }}
              >
                <td style={{ padding: "10px", color: "#333" }}>{dir.name}</td>
                <td style={{ padding: "10px", color: "#333" }}>
                  {dir.totalDrivers}
                </td>
                <td style={{ padding: "10px" }}>
                  <span style={{ display: "flex", gap: 18 }}>
                    <FaEye
                      style={{ cursor: "pointer" }}
                      onClick={() => setViewingHotspots(true)}
                    />
                    <FaEdit
                      style={{ cursor: "pointer" }}
                      onClick={() => handleEdit(dir.id)}
                    />
                    <FaTrash
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(dir.id)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeoFenceComponent;
