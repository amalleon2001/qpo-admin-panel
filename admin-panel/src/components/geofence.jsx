// GeofenceTable.jsx
import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import GeofenceComponent from "./geofence-component"; // Adjust path as needed

const GeofenceTable = () => {
  const initialData = [
    { id: 1, route: "Tidel Park and SIPCOT", totalDrivers: 10 },
    { id: 2, route: "Thiruvanmiyur and ECR", totalDrivers: 10 },
    { id: 3, route: "Tidel Park and SIPCOT", totalDrivers: 10 },
  ];

  const [routes, setRoutes] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [viewingGeoFenceComponent, setViewingGeoFenceComponent] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = routes.filter((row) =>
    row.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setRoutes(routes.filter((r) => r.id !== id));
  };

  const handleSaveEdit = (id, newRoute) => {
    setRoutes(routes.map((r) => (r.id === id ? { ...r, route: newRoute } : r)));
    setEditingRow(null);
  };

  // Show DirectionTable component when viewingDirectionTable is true
  if (viewingGeoFenceComponent) {
    return (
      <GeofenceComponent
        onBack={() => setViewingGeoFenceComponent(false)}
        route={selectedRoute}
      />
    );
  }

  return (
    <div className="p-4 pt-2 bg-white">
      <hr />

      {/* Title */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <div style={{ fontSize: 22, fontWeight: "bold" }}>Geofence</div>
      </div>

      {/* Search + Filters */}
      <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
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
          Total Count: {filteredData.length}
        </div>
      </div>

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
        <thead style={{ backgroundColor: "#D9D9D9" }}>
          <tr>
            <th style={{ padding: "12px" }}>Route Name</th>
            <th style={{ padding: "12px" }}>Total Drivers Tagged</th>
            <th style={{ padding: "12px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td style={{ padding: "12px" }}>
                {editingRow === row.id ? (
                  <input
                    type="text"
                    defaultValue={row.route}
                    onBlur={(e) => handleSaveEdit(row.id, e.target.value)}
                  />
                ) : (
                  row.route
                )}
              </td>
              <td style={{ padding: "12px", paddingLeft: "80px" }}>{row.totalDrivers}</td>
              <td style={{ padding: "12px", display: "flex", gap: "20px" }}>
                <FaEye
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedRoute(row.route);
                    setViewingGeoFenceComponent(true);
                  }}
                />
                <FaEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditingRow(row.id)}
                />
                <FaTrash
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeofenceTable;
