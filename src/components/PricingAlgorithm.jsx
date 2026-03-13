import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

const PricingAlgorithm = () => {
  const [pricingData, setPricingData] = useState([
    { id: 1, distanceRange: '1-3', pricingPerKm: 10 },
    { id: 2, distanceRange: '2-5', pricingPerKm: 10 },
    { id: 3, distanceRange: '3-7', pricingPerKm: 10 },
    { id: 4, distanceRange: '4-9', pricingPerKm: 10 },
    { id: 5, distanceRange: 'Above 10', pricingPerKm: 10 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEdit = (id) => {
    const item = pricingData.find((data) => data.id === id);
    setEditingId(id);
    setEditValues({ distanceRange: item.distanceRange, pricingPerKm: item.pricingPerKm });
  };
  const handleSave = (id) => {
    setPricingData((prev) => prev.map((item) => item.id === id ? { ...item, ...editValues } : item));
    setEditingId(null); setEditValues({});
  };
  const handleCancel = () => { setEditingId(null); setEditValues({}); };
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this pricing rule?'))
      setPricingData((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAdd = () => {
    const newId = Math.max(...pricingData.map((item) => item.id)) + 1;
    setPricingData((prev) => [...prev, { id: newId, distanceRange: 'New Range', pricingPerKm: 0 }]);
    handleEdit(newId);
  };
  const handleInputChange = (field, value) => {
    setEditValues((prev) => ({ ...prev, [field]: field === 'pricingPerKm' ? Number(value) : value }));
  };

  const filteredData = pricingData.filter((item) => item.distanceRange.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold mb-0 text-gray-700 text-[28px]">Pricing Algorithm</h2>
      </div>

      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="relative flex-[1_1_300px] max-w-[900px]">
          <FaSearch className="absolute top-3 left-3 text-gray-400 text-base" />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg outline-none bg-white text-sm" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 border border-gray-400 text-[#363636] hover:bg-gray-100 cursor-pointer bg-white rounded-lg text-base font-medium py-2 px-4" onClick={handleAdd}>
            <span className="text-base">+</span> Add
          </button>
          <div className="px-3 py-2 border border-gray-300 rounded bg-[#f8f9fa] text-sm font-semibold text-gray-700">
            Total Count : {filteredData.length}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-0 border border-black border-separate border-spacing-0 overflow-hidden">
          <thead className="bg-[#f1f3f4] border-b border-gray-300">
            <tr>
              <th className="p-2.5 border-none font-semibold text-sm text-black bg-[#D9D9D9] text-left">Distance Range (km)</th>
              <th className="p-1.5 border-none font-semibold text-sm text-black bg-[#D9D9D9] text-center">Pricing Per km (Rs)</th>
              <th className="p-1.5 border-none font-semibold text-sm text-black bg-[#D9D9D9] text-center w-[120px]">Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="py-3.75 px-12.5 border-b border-[#363636] text-sm text-gray-700">
                  {editingId === item.id ? (
                    <input type="text" value={editValues.distanceRange || ''} onChange={(e) => handleInputChange('distanceRange', e.target.value)} className="w-full py-2 px-4 border border-blue-500 rounded outline-none bg-white text-sm" />
                  ) : item.distanceRange}
                </td>
                <td className="py-4 px-5 border-b border-[#363636] text-sm text-gray-700 text-center">
                  {editingId === item.id ? (
                    <input type="number" value={editValues.pricingPerKm || ''} onChange={(e) => handleInputChange('pricingPerKm', e.target.value)} className="py-1.5 px-2 border border-blue-500 rounded outline-none bg-white text-sm text-center max-w-[100px] mx-auto" />
                  ) : item.pricingPerKm}
                </td>
                <td className="py-4 px-5 border-b border-[#363636] text-center">
                  <div className="flex justify-center gap-2">
                    {editingId === item.id ? (
                      <>
                        <button className="bg-transparent border-none cursor-pointer p-1 text-green-600 text-base" onClick={() => handleSave(item.id)} title="Save"><FaSave /></button>
                        <button className="bg-transparent border-none cursor-pointer p-1 text-red-600 text-base" onClick={handleCancel} title="Cancel"><FaTimes /></button>
                      </>
                    ) : (
                      <>
                        <button className="bg-transparent border-none cursor-pointer p-1 text-gray-500 text-base" onClick={() => handleEdit(item.id)} title="Edit"><FaEdit /></button>
                        <button className="bg-transparent border-none cursor-pointer p-1 text-gray-500 text-base" onClick={() => handleDelete(item.id)} title="Delete"><FaTrash /></button>
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
        <div className="text-center py-5"><p className="text-gray-500">No pricing rules found</p></div>
      )}
    </div>
  );
};

export default PricingAlgorithm;
