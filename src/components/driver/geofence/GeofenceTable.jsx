import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import GeofenceComponent from './GeofenceComponent';

const GeofenceTable = () => {
  const initialData = [
    { id: 1, route: 'Tidel Park and SIPCOT', totalDrivers: 10 },
    { id: 2, route: 'Thiruvanmiyur and ECR', totalDrivers: 10 },
    { id: 3, route: 'Tidel Park and SIPCOT', totalDrivers: 10 },
  ];
  const [routes, setRoutes] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [viewingGeoFenceComponent, setViewingGeoFenceComponent] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = routes.filter((row) => row.route.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleDelete = (id) => setRoutes(routes.filter((r) => r.id !== id));
  const handleSaveEdit = (id, newRoute) => { setRoutes(routes.map((r) => (r.id === id ? { ...r, route: newRoute } : r))); setEditingRow(null); };

  if (viewingGeoFenceComponent) return <GeofenceComponent onBack={() => setViewingGeoFenceComponent(false)} route={selectedRoute} />;

  return (
    <div className="p-4 pt-2 bg-white">
      <hr className='mb-3'/>
      <div className="flex items-center gap-2 mb-3">
        <div className="text-[22px] font-bold">Geofence</div>
      </div>

      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <div className="relative flex-[1_1_250px] max-w-[1000px]">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-[150px]">
          <option>This Month</option><option>This Week</option><option>Today</option>
        </select>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">Total Count: {filteredData.length}</div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-[#D9D9D9]">
          <tr>
            <th className="p-3">Route Name</th>
            <th className="p-3">Total Drivers Tagged</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td className="p-3">
                {editingRow === row.id ? (
                  <input type="text" defaultValue={row.route} onBlur={(e) => handleSaveEdit(row.id, e.target.value)} />
                ) : row.route}
              </td>
              <td className="p-3 pl-20">{row.totalDrivers}</td>
              <td className="p-3 flex gap-5">
                <FaEye className="cursor-pointer" onClick={() => { setSelectedRoute(row.route); setViewingGeoFenceComponent(true); }} />
                <FaEdit className="cursor-pointer" onClick={() => setEditingRow(row.id)} />
                <FaTrash className="cursor-pointer" onClick={() => handleDelete(row.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeofenceTable;
