import React, { useState } from 'react';
import SearchIcon from './common/SearchIcon';
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="10" rx="8" ry="5" stroke="#333" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2.5" stroke="#333" strokeWidth="1.5" />
  </svg>
);

const sampleData = Array(6).fill({
  signupDate: '16 Jul 2025',
  time: '08:35',
  rideId: 'R0001',
  riderName: 'Manisha',
  mobileNumber: '0123456789',
  gender: 'Female',
  installSource: 'Deeplink',
  campaign: 'Whatsapp',
});

function RiderDatabase() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr />

      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">Rider database</h2>
        <span className="text-[22px] font-semibold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : 1150
        </span>
      </div>

      <div className="flex items-center gap-8 mb-4">
        <div className="flex items-center bg-white border-[1.5px] border-gray-300 rounded-3xl py-1.75 px-4 flex-1 gap-2">
          <SearchIcon />
          <input
            className="border-none outline-none text-sm text-gray-700 w-full bg-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-1.75 pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none min-w-[130px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_10px_center]"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-1.75 pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none min-w-[130px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_10px_center]"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="today">Today</option>
        </select>
      </div>

      <div className="border-[1.5px] border-gray-300 rounded overflow-auto">
        <table className="w-full border-collapse min-w-[900px]">
          <thead>
            <tr>
              {['Action', 'Signup Date', 'Time', 'Ride ID', 'Rider Name', 'Mobile Number', 'Gender', 'Install Source', 'Campaign'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-center border-b-[1.5px] border-gray-300 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, i) => (
              <tr key={i} className="bg-white">
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">
                  <button className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center mx-auto"><EyeIcon /></button>
                </td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.signupDate}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.time}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.rideId}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.riderName}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.mobileNumber}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.gender}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.installSource}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0] whitespace-nowrap">{row.campaign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RiderDatabase;
