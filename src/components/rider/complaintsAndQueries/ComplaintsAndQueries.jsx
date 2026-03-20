import React, { useState } from 'react';

const sampleData = Array(6).fill({
  date: '16 Jul 2025',
  time: '10:00',
  ticketId: 'INFO#001',
  type: 'Ride',
  riderId: 'R0001',
  riderName: 'Manisha',
  category: 'Driver Behavior',
  preview: 'Driver Charged Extra Fare',
});

import SearchIcon from '../../common/SearchIcon';

function ComplaintsAndQueries() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  const filtered = sampleData.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      r.ticketId.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-[15px] bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr className='mb-3'/>

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold text-gray-900 m-0 pl-3 font-[Poppins]">
          Complaints and Queries
        </h2>
        <span className="text-[22px] font-bold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : 1150
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center bg-white border-[1.5px] border-gray-300 rounded-lg py-1.5 px-3.5 flex-1 gap-2">
          <SearchIcon />
          <input
            className="border-none outline-none text-sm text-gray-700 w-full bg-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-[7px] pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_10px_center]"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="pending">Pending</option>
        </select>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-[7px] pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_10px_center]"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="today">Today</option>
        </select>
      </div>

      <div className="bg-white border-[1.5px] border-gray-300 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {[
                'Date',
                'Time',
                'Ticket ID',
                'Type',
                'Rider ID',
                'Rider Name',
                'Category',
                'Preview',
              ].map((h) => (
                <th
                  key={h}
                  className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4 text-center border-b-[1.5px] border-gray-300"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.date}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.time}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.ticketId}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.type}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.riderId}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.riderName}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.category}</td>
                <td className="text-sm text-gray-700 py-[13px] px-4 text-center border-b border-[#f0f0f0]">{row.preview}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintsAndQueries;
