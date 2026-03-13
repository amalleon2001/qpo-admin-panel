import React, { useState } from 'react';
import SearchIcon from './common/SearchIcon';

const sampleData = [
  { userType: 'Returning User', appOpenedAt: '10:05', appOpenedVia: 'Notification', riderId: 'CUS0001', riderName: 'Manisha', pickupSearched: 'Auto fetched', dropSearched: 'Bharathi Nagar' },
  ...Array(5).fill({ userType: 'New User', appOpenedAt: '10:05', appOpenedVia: 'Notification', riderId: 'CUS0001', riderName: 'Manisha', pickupSearched: 'Auto fetched', dropSearched: 'Bharathi Nagar' }),
];

function LiveAppActivity() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  const filtered = sampleData.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      r.riderId.toLowerCase().includes(search.toLowerCase()) ||
      r.userType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr />

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-[15px]">
          <span className="poppins-breadcrumb text-[22px] text-[#696969] font-medium cursor-pointer">Activity Logs</span>
          <span className="poppins-breadcrumb text-[22px] text-gray-400">&gt;</span>
          <span className="poppins-breadcrumb text-[22px] text-[#696969] font-medium cursor-pointer">App Activity Logs</span>
          <span className="poppins-breadcrumb text-[22px] text-gray-400">&gt;</span>
          <span className="poppins-breadcrumb text-[22px] text-gray-900 font-semibold">Live App Activity</span>
        </div>
        <span className="text-[22px] font-bold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : 1150
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
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
          <option value="new">New User</option>
          <option value="returning">Returning User</option>
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

      <div className="border-[1.5px] border-gray-300 rounded overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['User Type', 'App Opened at', 'App Opened Via', 'Rider ID', 'Rider Name', 'Pickup Searched', 'Drop Searched'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-center border-b-[1.5px] border-gray-300">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="bg-white">
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.userType}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.appOpenedAt}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.appOpenedVia}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.riderId}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.riderName}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.pickupSearched}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.dropSearched}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiveAppActivity;
