import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEye, FaEdit, FaTrash, FaArrowLeft, FaSearch } from 'react-icons/fa';
import HotspotListView from '../demandAndHotspot/HotspotListView';

const DirectionDetails = ({ direction, onBack }) => (
  <div className="p-4">
    <button onClick={onBack} className="flex items-center gap-1.5 bg-transparent border-none text-blue-500 text-lg cursor-pointer mb-4">
      <FaArrowLeft /> Back
    </button>
    <h2 className="text-[22px] font-bold mb-3">Direction Details</h2>
    <div>
      <div className="mb-3"><b>Direction:</b> {direction.name}</div>
      <div><b>Total Drivers Tagged:</b> {direction.totalDrivers}</div>
    </div>
  </div>
);

const GeoFenceComponent = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [directions, setDirections] = useState([
    { id: 1, name: 'Tidel Park and SIPCOT', totalDrivers: 10 },
    { id: 2, name: 'Thirunvanmiur and ECR', totalDrivers: 10 },
  ]);
  const [viewingDirection, setViewingDirection] = useState(null);
  const [viewingHotspots, setViewingHotspots] = useState(false);

  const handleDelete = (id) => setDirections(directions.filter((dir) => dir.id !== id));
  const handleEdit = (id) => {
    const newName = prompt('Enter new direction name:');
    if (newName) setDirections(directions.map((dir) => dir.id === id ? { ...dir, name: newName } : dir));
  };
  const filteredDirections = directions.filter((dir) => dir.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (viewingHotspots) return <HotspotListView onBack={() => setViewingHotspots(false)} />;
  if (viewingDirection) return <DirectionDetails direction={viewingDirection} onBack={() => setViewingDirection(null)} />;

  return (
    <div className="p-4 pt-2 bg-white">
      <hr className='mb-5'/>
      <div className="flex items-center gap-2.5 text-[22px] font-bold mb-2.5">
        <button onClick={onBack} aria-label="Back" className="border-none bg-transparent cursor-pointer flex items-center p-0 mr-1.5 text-[22px] text-black">
          <FaArrowLeft />
        </button>
        <span className="text-gray-500 font-bold">Geofence &gt;</span>
        <span className="text-black font-bold">Direction</span>
      </div>

      <div className="bg-white py-3 px-4 rounded-md flex items-center gap-2.5 mb-3">
        <div className="relative flex-[1_1_300px] max-w-[1000px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#919191] pointer-events-none" />
          <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-white py-2 pl-9 pr-3 rounded-md border border-[#c6c6c6] text-base outline-none" />
        </div>
        <button onClick={() => toast.info('Add new direction')} className="bg-[#f4f4f4] text-gray-800 border border-gray-300 rounded-md py-1.75 px-4 text-base cursor-pointer">
          + Add Direction
        </button>
        <span className="font-bold border border-gray-300 rounded-md py-1.75 px-4 text-lg bg-white">
          Total Count : {directions.length}
        </span>
      </div>

      <div className="border border-[#919191] rounded overflow-hidden">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#d9d9d9] text-gray-600">
              <th className="p-2.5 font-medium text-left">Direction</th>
              <th className="p-2.5 font-medium text-left">Total Drivers Tagged</th>
              <th className="p-2.5 font-medium text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDirections.map((dir) => (
              <tr key={dir.id} className="border-b border-[#e4e4e4] bg-white">
                <td className="p-2.5 text-gray-700">{dir.name}</td>
                <td className="p-2.5 text-gray-700">{dir.totalDrivers}</td>
                <td className="p-2.5">
                  <span className="flex gap-4.5">
                    <FaEye className="cursor-pointer" onClick={() => setViewingHotspots(true)} />
                    <FaEdit className="cursor-pointer" onClick={() => handleEdit(dir.id)} />
                    <FaTrash className="cursor-pointer" onClick={() => handleDelete(dir.id)} />
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
