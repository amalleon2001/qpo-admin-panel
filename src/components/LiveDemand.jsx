import React, { useState } from 'react';
import { FaSearch, FaEye } from 'react-icons/fa';

const LiveDemand = ({ setActive, onViewDirection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const liveDemandData = [
    { route: 'Tidel Park and SIPCOT', liveRideRequest: 10, paired: 6, waitingForDriverAssigning: 4, waitingForDriverArrival: 2 },
    { route: 'Thirunvanmiur and ECR', liveRideRequest: 10, paired: 6, waitingForDriverAssigning: 4, waitingForDriverArrival: 2 },
    { route: 'Tidel Park and SIPCOT', liveRideRequest: 10, paired: 6, waitingForDriverAssigning: 4, waitingForDriverArrival: 2 },
    { route: 'Tidel Park and SIPCOT', liveRideRequest: 10, paired: 6, waitingForDriverAssigning: 4, waitingForDriverArrival: 2 },
    { route: 'Tidel Park and SIPCOT', liveRideRequest: 10, paired: 6, waitingForDriverAssigning: 4, waitingForDriverArrival: 2 },
    { route: 'Tidel Park and SIPCOT', liveRideRequest: 10, paired: 6, waitingForDriverAssigning: 4, waitingForDriverArrival: 2 },
  ];
  const filteredData = liveDemandData.filter((row) => row.route.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold mb-0 mt-2 nav-path">Live Demand</h4>
      </div>

      <div className="flex items-center justify-start gap-4 mb-3 flex-wrap gap-y-2.5">
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
        <table className="w-full mb-0 border border-gray-300 rounded-lg border-separate border-spacing-0 overflow-hidden">
          <thead className="bg-[#f8f9fa] border-b border-gray-300">
            <tr>
              {['Action', 'Route Name', 'Live Ride Request', 'Paired', 'Waiting for Driving Assigning', 'Waiting for Driver Arrival'].map((h) => (
                <th key={h} className="p-3 border-none text-[#363636]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td className="p-3 border-b border-gray-300 text-center cursor-pointer">
                  <FaEye className="text-[#1C1B1F]" onClick={() => onViewDirection(row.route)} />
                </td>
                <td className="p-3 border-b border-gray-300">{row.route}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.liveRideRequest}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.paired}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.waitingForDriverAssigning}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.waitingForDriverArrival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveDemand;
