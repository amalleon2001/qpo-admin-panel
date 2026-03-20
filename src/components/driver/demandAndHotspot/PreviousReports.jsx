import React, { useState } from 'react';
import { FaSearch, FaEye } from 'react-icons/fa';

const PreviousReports = ({ onViewReport }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const reportsData = [
    { route: 'Tidel Park and SIPCOT', totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: '2 Minutes' },
    { route: 'Thiruvanmiyur and ECR', totalRequest: 10, paired: 6, completed: 6, cancelled: 6, avgWait: '2 Minutes' },
  ];
  const filteredData = reportsData.filter((row) => row.route.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4 pt-2 bg-white">
      <hr className='mb-5'/>
      <h4 className="font-semibold mb-3">Previous Reports</h4>

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
        <table className="w-full border border-gray-300 rounded-lg border-separate border-spacing-0 overflow-hidden">
          <thead className="bg-[#f8f9fa] border-b border-gray-300">
            <tr>
              {['Action', 'Route Name', 'Total Ride Request', 'Paired', 'Completed Rides', 'Cancelled Rides', 'Average Waiting Time'].map((h) => (
                <th key={h} className="p-3 border-none">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td className="p-3 border-b border-gray-300 text-center"><FaEye className="cursor-pointer" onClick={() => onViewReport(row)} /></td>
                <td className="p-3 border-b border-gray-300">{row.route}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.totalRequest}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.paired}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.completed}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.cancelled}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.avgWait}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousReports;
