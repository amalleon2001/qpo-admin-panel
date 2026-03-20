import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaEye } from 'react-icons/fa';

const directionData = [
  {
    direction: 'Tidel Park to SIPCOT',
    liveRideRequest: 10,
    paired: 6,
    waitingForDrivingAssigning: 4,
    waitingForDriverArrival: 2,
  },
  {
    direction: 'SIPCOT to Tidel Park',
    liveRideRequest: 10,
    paired: 6,
    waitingForDrivingAssigning: 4,
    waitingForDriverArrival: 2,
  },
];

function RideDirection({ routeName, onBack, onViewHotspot }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = directionData.filter((row) =>
    row.direction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className='mb-5'/>
      <div className="flex items-center mb-2 mt-4">
        <FaArrowLeft
          style={{ cursor: 'pointer', marginRight: 10 }}
          onClick={onBack}
        />
        <h4 className="font-semibold mb-0 nav-path">
          <span style={{ color: 'grey', fontWeight: 'bold' }}>
            Live Demand &nbsp; &gt; Routes &nbsp; &gt;
          </span>{' '}
          Directions
        </h4>
      </div>

      <div
        className="flex items-center justify-start gap-4 mb-3 mt-4 flex-wrap"
        style={{ flexWrap: 'wrap', rowGap: '10px' }}
      >
        <div
          className="relative"
          style={{ flex: '1 1 250px', maxWidth: '1000px' }}
        >
          <FaSearch
            className="absolute"
            style={{ top: 12, left: 12, color: '#888' }}
          />
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white"
            placeholder="Search"
            style={{ borderRadius: 10, width: '100%' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white"
          style={{ borderRadius: 10, maxWidth: 150 }}
        >
          <option>This Month</option>
        </select>

        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">
          Total Count : {filteredData.length}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table
          className="w-full mb-0"
          style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            borderCollapse: 'separate',
            borderSpacing: 0,
            overflow: 'hidden',
          }}
        >
          <thead
            className="bg-gray-100"
            style={{
              backgroundColor: '#f8f9fa',
              borderBottom: '1px solid #ccc',
            }}
          >
            <tr>
              <th style={{ padding: 12, border: 'none' }}>Action</th>
              <th style={{ padding: 12, border: 'none' }}>Direction</th>
              <th style={{ padding: 12, border: 'none' }}>Live Ride Request</th>
              <th style={{ padding: 12, border: 'none' }}>Paired</th>
              <th style={{ padding: 12, border: 'none' }}>
                Waiting for Driving Assigning
              </th>
              <th style={{ padding: 12, border: 'none' }}>
                Waiting for Driver Arrival
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    padding: 12,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  <FaEye
                    style={{ cursor: 'pointer' }}
                    onClick={() => onViewHotspot(row)}
                  />
                </td>
                <td
                  style={{
                    padding: 12,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {row.direction}
                </td>
                <td
                  style={{
                    padding: 12,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  {row.liveRideRequest}
                </td>
                <td
                  style={{
                    padding: 12,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  {row.paired}
                </td>
                <td
                  style={{
                    padding: 12,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  {row.waitingForDrivingAssigning}
                </td>
                <td
                  style={{
                    padding: 12,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  {row.waitingForDriverArrival}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RideDirection;
