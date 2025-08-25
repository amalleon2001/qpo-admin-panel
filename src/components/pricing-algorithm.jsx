import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

const PricingAlgorithm = () => {
  const [pricingData, setPricingData] = useState([
    {
      id: 1,
      distanceRange: "1-3",
      pricingPerKm: 10,
    },
    {
      id: 2,
      distanceRange: "2-5",
      pricingPerKm: 10,
    },
    {
      id: 3,
      distanceRange: "3-7",
      pricingPerKm: 10,
    },
    {
      id: 4,
      distanceRange: "4-9",
      pricingPerKm: 10,
    },
    {
      id: 5,
      distanceRange: "Above 10",
      pricingPerKm: 10,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEdit = (id) => {
    const item = pricingData.find(data => data.id === id);
    setEditingId(id);
    setEditValues({
      distanceRange: item.distanceRange,
      pricingPerKm: item.pricingPerKm
    });
  };

  const handleSave = (id) => {
    setPricingData(prevData => 
      prevData.map(item => 
        item.id === id 
          ? { ...item, ...editValues }
          : item
      )
    );
    setEditingId(null);
    setEditValues({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditValues({});
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this pricing rule?")) {
      setPricingData(prevData => prevData.filter(item => item.id !== id));
    }
  };

  const handleAdd = () => {
    const newId = Math.max(...pricingData.map(item => item.id)) + 1;
    const newItem = {
      id: newId,
      distanceRange: "New Range",
      pricingPerKm: 0,
    };
    setPricingData(prevData => [...prevData, newItem]);
    handleEdit(newId); // Immediately edit the new item
  };

  const handleInputChange = (field, value) => {
    setEditValues(prev => ({
      ...prev,
      [field]: field === 'pricingPerKm' ? Number(value) : value
    }));
  };

  const filteredData = pricingData.filter(item =>
    item.distanceRange.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold mb-0" style={{ color: "#333", fontSize: "28px" }}>
          Pricing Algorithm
        </h2>
      </div>

      {/* Search, Add Button, and Total Count */}
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
       <div className="position-relative" style={{ flex: "1 1 300px", maxWidth: "900px" }}>
  <FaSearch
    className="position-absolute"
    style={{ top: 12, left: 12, color: "#999", fontSize: 16 }}
  />
  <input
    type="text"
    className="form-control ps-5"
    placeholder="Search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      borderRadius: 8,
      border: "1px solid #ddd",
      fontSize: 14,
    }}
  />
</div>

        <div className="d-flex align-items-center gap-5">
          <button
            className="btn btn-outline-secondary d-flex align-items-center gap-2"
            onClick={handleAdd}
            style={{
              borderRadius: 8,
              fontSize: 16,
              color: "#363636",
              fontWeight: 500,
              padding: "8px 16px",
            }}
          >
            <span style={{ fontSize: 16 }}>+</span>
            Add
          </button>

          <div
            className="px-3 py-2 border rounded"
            style={{
              backgroundColor: "#f8f9fa",
              fontSize: 14,
              fontWeight: 600,
              color: "#333",
            }}
          >
            Total Count : {filteredData.length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table
          className="table mb-0"
          style={{
            border: "1px solid #000000ff",
            
            borderCollapse: "separate",
            borderSpacing: 0,
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#f1f3f4",
              borderBottom: "1px solid #ddd",
            }}
          >
            <tr>
              <th
                style={{
                  padding: "10px",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#000000ff",
                  backgroundColor:"#D9D9D9",
                  textAlign: "left",
                }}
              >
                Distance Range (km)
              </th>
              <th
                style={{
                  padding: "6px",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#000000ff",
                  backgroundColor:"#D9D9D9",
                  textAlign: "center",
                }}
              >
                Pricing Per km (Rs)
              </th>
              <th
                style={{
                  padding: "6px",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#000000ff",
                  backgroundColor:"#D9D9D9",
                  textAlign: "center",
                  width: "120px",
                }}
              >
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} style={{ backgroundColor: "#fff" }}>
                <td
                  style={{
                    padding: "15px 50px",
                    border: "none",
                    borderBottom: "1px solid #363636",
                    fontSize: 14,
                    color: "#333",
                  }}
                >
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editValues.distanceRange || ''}
                      onChange={(e) => handleInputChange('distanceRange', e.target.value)}
                      className="form-control"
                      style={{
                        fontSize: 14,
                        border: '1px solid #007bff',
                        borderRadius: 4,
                        padding: '6px 8px'
                      }}
                    />
                  ) : (
                    item.distanceRange
                  )}
                </td>
                <td
                  style={{
                    padding: "16px 20px",
                    border: "none",
                    borderBottom: "1px solid #363636",
                    fontSize: 14,
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {editingId === item.id ? (
                    <input
                      type="number"
                      value={editValues.pricingPerKm || ''}
                      onChange={(e) => handleInputChange('pricingPerKm', e.target.value)}
                      className="form-control"
                      style={{
                        fontSize: 14,
                        border: '1px solid #007bff',
                        borderRadius: 4,
                        padding: '6px 8px',
                        textAlign: 'center',
                        maxWidth: '100px',
                        margin: '0 auto'
                      }}
                    />
                  ) : (
                    item.pricingPerKm
                  )}
                </td>
                <td
                  style={{
                    padding: "16px 20px",
                    border: "none",
                    borderBottom: "1px solid #363636",
                    textAlign: "center",
                  }}
                >
                  <div className="d-flex justify-content-center gap-2">
                    {editingId === item.id ? (
                      <>
                        <button
                          className="btn btn-link p-1"
                          onClick={() => handleSave(item.id)}
                          style={{
                            color: "#28a745",
                            fontSize: 16,
                            border: "none",
                            background: "none",
                          }}
                          title="Save"
                        >
                          <FaSave />
                        </button>
                        <button
                          className="btn btn-link p-1"
                          onClick={handleCancel}
                          style={{
                            color: "#dc3545",
                            fontSize: 16,
                            border: "none",
                            background: "none",
                          }}
                          title="Cancel"
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-link p-1"
                          onClick={() => handleEdit(item.id)}
                          style={{
                            color: "#666",
                            fontSize: 16,
                            border: "none",
                            background: "none",
                          }}
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn btn-link p-1"
                          onClick={() => handleDelete(item.id)}
                          style={{
                            color: "#666",
                            fontSize: 16,
                            border: "none",
                            background: "none",
                          }}
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      {filteredData.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">No pricing rules found</p>
        </div>
      )}
    </div>
  );
};

export default PricingAlgorithm;