import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const hotspotData = [
  { hotspot: 'Gandhi Road', liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: '2 Minutes' },
  { hotspot: 'AGS Navallur', liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: '2 Minutes' },
  { hotspot: 'Baby Nagar', liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: '2 Minutes' },
  { hotspot: 'Bharathi Nagar', liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: '2 Minutes' },
  { hotspot: 'Dollar Accenture', liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: '2 Minutes' },
  { hotspot: 'IGP', liveRideRequest: 10, paired: 6, waitingForDrivingAssigning: 4, waitingForDriverArrival: 2, averageWaitingTime: '2 Minutes' },
];

function HotspotTable({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = hotspotData.filter((row) => row.hotspot.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className='mb-5'/>
      <div className="flex items-center mb-3">
        <FaArrowLeft className="cursor-pointer mr-2.5" onClick={onBack} />
        <h4 className="font-semibold mb-0 nav-path">
          <span className="text-gray-500 font-bold">Live Demand &nbsp; &gt; Routes &nbsp; &gt;Directions &nbsp; &gt;</span>{' '}
          Hotspot
        </h4>
      </div>

      <div className="flex items-center mb-3 gap-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 border border-gray-300 rounded-[10px] outline-none bg-white max-w-[330px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white w-[130px] text-[15px]">
          <option>This Month</option>
        </select>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg bg-white min-w-[140px] text-center">
          Total Count : {filteredData.length}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-0 border border-gray-300 rounded-lg border-separate border-spacing-0 overflow-hidden text-[15px]">
          <thead className="bg-gray-100">
            <tr>
              {['Hotspot', 'Live Ride Request', 'Paired', 'Waiting for Driving Assigning', 'Waiting for Driver Arrival', 'Average waiting Time'].map((h) => (
                <th key={h} className="p-3 border-none">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td className="p-3 border-b border-gray-300">{row.hotspot}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.liveRideRequest}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.paired}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.waitingForDrivingAssigning}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.waitingForDriverArrival}</td>
                <td className="p-3 border-b border-gray-300 text-center">{row.averageWaitingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotspotTable;
