import React, { useState } from 'react';
import { FaSearch, FaEye, FaArrowLeft } from 'react-icons/fa';
import HotspotDetails from './HotspotDetails';

const ReportDetails = ({ onBack, setActive }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const directionsData = [
    { direction: 'Tidel Park and SIPCOT', totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: '2 Minutes' },
    { direction: 'Thiruvanmiyur and ECR', totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: '2 Minutes' },
  ];
  const filteredData = directionsData.filter((row) => row.direction.toLowerCase().includes(searchTerm.toLowerCase()));

  if (selectedHotspot) return <HotspotDetails data={selectedHotspot} onBack={() => setSelectedHotspot(null)} />;

  return (
    <div className="p-4 pt-2 bg-white">
      <hr className='mb-5'/>
      <div className="flex items-center gap-2 mb-3">
        <FaArrowLeft className="cursor-pointer text-[22px] text-gray-500" onClick={() => onBack()} />
        <div className="text-[22px] font-bold">
          <span className="text-gray-500 font-bold">Previous Reports &nbsp; &gt; &nbsp;</span>{' '}Direction
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <div className="relative flex-[1_1_250px] max-w-[1000px]">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-[150px]">
          <option>This Month</option><option>This Week</option><option>Today</option>
        </select>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">Total Count : {filteredData.length}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {['Action', 'Direction', 'Total Ride Request', 'Paired', 'Completed Rides', 'Cancelled Rides', 'Average Waiting Time'].map((h) => (
                <th key={h} className="p-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td className="text-center p-3"><FaEye className="cursor-pointer" onClick={() => setSelectedHotspot(row)} /></td>
                <td className="p-3">{row.direction}</td>
                <td className="text-center p-3">{row.totalRequest}</td>
                <td className="text-center p-3">{row.paired}</td>
                <td className="text-center p-3">{row.completed}</td>
                <td className="text-center p-3">{row.cancelled}</td>
                <td className="text-center p-3">{row.avgWait}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDetails;
