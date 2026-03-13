import React, { useState } from 'react';

import SearchIcon from './common/SearchIcon';

const ExportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="2"
      y="10"
      width="12"
      height="4"
      rx="1"
      stroke="#333"
      strokeWidth="1.4"
      fill="none"
    />
    <path
      d="M8 2v7M5 6l3 3 3-3"
      stroke="#333"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="10" rx="8" ry="5" stroke="#333" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2.5" stroke="#333" strokeWidth="1.5" />
  </svg>
);

const sampleData = Array(6).fill({
  date: '16 Jul 2025',
  invoiceId: 'INV#001',
  rideId: 'R0001',
  riderName: 'Manisha',
  pickup: 'Hindustan College',
  drop: 'Bharathi Nagar',
  distance: '11.5',
});

function SalesReports() {
  const [search, setSearch] = useState('');
  const [period, setPeriod] = useState('month');

  const filtered = sampleData.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      r.invoiceId.toLowerCase().includes(search.toLowerCase()) ||
      r.rideId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-[18px] bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr />

      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">
          Sales Reports
        </h2>
        <span className="text-lg font-bold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : 1150
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center bg-white border-[1.5px] border-gray-300 rounded-3xl py-[7px] px-4 flex-1 gap-2">
          <SearchIcon />
          <input
            className="border-none outline-none text-sm text-gray-700 w-full bg-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-1.5 border-[1.5px] border-gray-300 rounded-lg py-[7px] px-4 text-sm text-gray-700 bg-white cursor-pointer font-medium">
          <ExportIcon />
          Export
        </button>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-[7px] pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none min-w-[130px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_10px_center]"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="today">Today</option>
        </select>
      </div>

      <div className="border-[1.5px] border-gray-300 rounded overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {[
                'Action',
                'Date',
                'Invoice ID',
                'Ride ID',
                'Rider Name',
                'Pickup',
                'Drop',
                'Distance (km)',
              ].map((h) => (
                <th
                  key={h}
                  className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-[18px] text-center border-b-[1.5px] border-gray-300"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="bg-white">
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  <button className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center mx-auto">
                    <EyeIcon />
                  </button>
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.date}
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.invoiceId}
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.rideId}
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.riderName}
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.pickup}
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.drop}
                </td>
                <td className="text-sm text-gray-700 py-[13px] px-[18px] text-center border-b border-[#f0f0f0]">
                  {row.distance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesReports;
