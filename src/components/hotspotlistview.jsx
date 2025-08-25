import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaArrowLeft, FaSearch } from "react-icons/fa";

const HotspotListView = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotspots, setHotspots] = useState([
    { id: 1, name: "Gandhi Road", totalDrivers: 10 },
    { id: 2, name: "AGS Navallur", totalDrivers: 10 },
    { id: 3, name: "Baby Nagar", totalDrivers: 10 },
    { id: 4, name: "Bharathi Nagar", totalDrivers: 10 },
    { id: 5, name: "Dollar Accenture", totalDrivers: 10 },
    { id: 6, name: "IGP", totalDrivers: 10 },
  ]);

  const handleDelete = (id) => {
    setHotspots(hotspots.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new hotspot name:");
    if (newName) {
      setHotspots(
        hotspots.map((item) =>
          item.id === id ? { ...item, name: newName } : item
        )
      );
    }
  };

  const filteredHotspots = hotspots.filter((hs) =>
    hs.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-2 bg-white">

      <hr/>
      {/* Breadcrumb */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 10,
        color: "grey",
        fontWeight: "bold"
      }}>
        <button
          onClick={onBack}
          style={{
            border: "none",
            background: "none",
            padding:0,
            cursor: "pointer",
            color: "#007bff",
            fontSize: 22,
            display: "flex",
            alignItems: "center"
          }}
        >
          <FaArrowLeft style={{ color:"black"}} />
        </button>
        <span style={{color:"#919191ff",fontWeight:"bold",fontSize:"22px"}}>Geofence  &gt;
        Direction &gt;</span>
        <span style={{ color: "#000" ,fontWeight:"bold",fontSize:"22px"}}>Hotspot</span>
      </div>
      <div
        style={{
          background: "#fff",
          padding: "10px",
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
              backgroundColor: "#fff",
              padding: "8px 12px 8px 36px",
              borderRadius: 6,
              border: "1px solid #c6c6c6ff",
              fontSize: 16,
            }}
          />
        </div>
        <button
          onClick={() => alert("Add new hotspot")}
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
          + Add Hotspot
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
          Total Count : {hotspots.length}
        </span>
      </div>
      <div style={{ border: "1.5px solid #777", borderRadius: 4, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: "#d9d9d9", color: "#444" }}>
              <th style={{ padding: 10, textAlign: "left" }}>Hotspot</th>
              <th style={{ padding: 10, textAlign: "left" }}>Total Drivers Tagged</th>
              <th style={{ padding: 10, textAlign: "left" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredHotspots.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #e4e4e4", background: "#fff" }}>
                <td style={{ padding: "10px", color: "#333" }}>{item.name}</td>
                <td style={{ padding: "10px", color: "#333" }}>{item.totalDrivers}</td>
                <td style={{ padding: "10px" }}>
                  <span style={{ display: "flex", gap: 14 }}>
                    <FaEye style={{ cursor: "pointer" }} onClick={() => alert(`View ${item.name}`)} />
                    <FaEdit style={{ cursor: "pointer" }} onClick={() => handleEdit(item.id)} />
                    <FaTrash style={{ cursor: "pointer" }} onClick={() => handleDelete(item.id)} />
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

export default HotspotListView;
