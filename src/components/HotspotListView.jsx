import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaArrowLeft, FaSearch } from 'react-icons/fa';

const HotspotListView = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hotspots, setHotspots] = useState([
    { id: 1, name: 'Gandhi Road', totalDrivers: 10 },
    { id: 2, name: 'AGS Navallur', totalDrivers: 10 },
    { id: 3, name: 'Baby Nagar', totalDrivers: 10 },
    { id: 4, name: 'Bharathi Nagar', totalDrivers: 10 },
    { id: 5, name: 'Dollar Accenture', totalDrivers: 10 },
    { id: 6, name: 'IGP', totalDrivers: 10 },
  ]);

  const handleDelete = (id) => setHotspots(hotspots.filter((item) => item.id !== id));
  const handleEdit = (id) => {
    const newName = prompt('Enter new hotspot name:');
    if (newName) setHotspots(hotspots.map((item) => item.id === id ? { ...item, name: newName } : item));
  };

  const filteredHotspots = hotspots.filter((hs) =>
    hs.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-2 bg-white">
      <hr />

      <div className="flex items-center gap-3 mb-2.5 text-gray-500 font-bold">
        <button onClick={onBack} className="border-none bg-transparent p-0 cursor-pointer text-black text-[22px] flex items-center">
          <FaArrowLeft />
        </button>
        <span className="text-[#919191] font-bold text-[22px]">Geofence &gt; Direction &gt;</span>
        <span className="text-black font-bold text-[22px]">Hotspot</span>
      </div>

      <div className="bg-white p-2.5 rounded-md flex items-center gap-2.5 mb-3">
        <div className="relative flex-[1_1_300px] max-w-[1000px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#919191] pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white py-2 pl-9 pr-3 rounded-md border border-[#c6c6c6] text-base outline-none"
          />
        </div>
        <button onClick={() => alert('Add new hotspot')} className="bg-[#f4f4f4] text-gray-800 border border-gray-300 rounded-md py-1.75 px-4 text-base cursor-pointer">
          + Add Hotspot
        </button>
        <span className="font-bold border border-gray-300 rounded-md py-1.75 px-4 text-lg bg-white">
          Total Count : {hotspots.length}
        </span>
      </div>

      <div className="border-[1.5px] border-gray-500 rounded overflow-hidden">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#d9d9d9] text-gray-600">
              <th className="p-2.5 text-left">Hotspot</th>
              <th className="p-2.5 text-left">Total Drivers Tagged</th>
              <th className="p-2.5 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredHotspots.map((item) => (
              <tr key={item.id} className="border-b border-[#e4e4e4] bg-white">
                <td className="p-2.5 text-gray-700">{item.name}</td>
                <td className="p-2.5 text-gray-700">{item.totalDrivers}</td>
                <td className="p-2.5">
                  <span className="flex gap-3.5">
                    <FaEye className="cursor-pointer" onClick={() => alert(`View ${item.name}`)} />
                    <FaEdit className="cursor-pointer" onClick={() => handleEdit(item.id)} />
                    <FaTrash className="cursor-pointer" onClick={() => handleDelete(item.id)} />
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
