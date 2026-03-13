import React, { useState } from 'react';
import SearchIcon from './common/SearchIcon';
const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11 2l3 3-9 9H2v-3l9-9z" stroke="#333" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="3" y="4" width="10" height="10" rx="1" stroke="#333" strokeWidth="1.4" />
    <path d="M1 4h14M6 4V2h4v2" stroke="#333" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const historyData = Array(6).fill({
  createdOn: '16 Jul 2025',
  title: 'QPO50',
  tag: 'QPO50',
  messageBody: 'QPO50',
  status: 'Active',
});

function NotificationManagement() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [message, setMessage] = useState('');
  const [target, setTarget] = useState('all');

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr />

      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">
          Notification Management
        </h2>
        <span className="text-[22px] font-semibold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : 1150
        </span>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center bg-white border-[1.5px] border-gray-300 rounded-3xl py-1.75 px-4 flex-1 gap-2">
          <SearchIcon />
          <input
            className="border-none outline-none text-sm text-gray-700 w-full bg-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-1 border-[1.5px] border-gray-300 rounded-lg py-1.75 px-3.5 text-sm text-gray-700 bg-white cursor-pointer font-medium whitespace-nowrap">
          + Add
        </button>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-1.75 pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none min-w-[120px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_10px_center]"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-1.75 pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none min-w-[120px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_10px_center]"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="today">Today</option>
        </select>
      </div>

      <div className="bg-dashboard-bg rounded-xl p-6 mb-7">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-700 font-medium">Notification Title</label>
              <input className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white w-3/5" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-700 font-medium">Notification Tag</label>
              <input className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white w-3/5" value={tag} onChange={(e) => setTag(e.target.value)} />
            </div>
            <div className="flex items-center gap-6 mt-1">
              <label className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="target" value="all" checked={target === 'all'} onChange={() => setTarget('all')} />
                All
              </label>
              <label className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="target" value="customerList" checked={target === 'customerList'} onChange={() => setTarget('customerList')} />
                Customer List
              </label>
            </div>
            <button className="send-btn">Send Notification</button>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-700 font-medium">Message</label>
              <textarea
                className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white resize-none h-[250px] w-4/5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg font-bold text-gray-900 mb-3">Notification History</div>
      <div className="border-[1.5px] border-gray-300 rounded overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Created On', 'Title', 'Tag', 'Message Body', 'Status', 'Action'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-left border-b-[1.5px] border-gray-300">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {historyData.map((row, i) => (
              <tr key={i} className="bg-white">
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.createdOn}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.title}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.tag}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.messageBody}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.status}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-2.5">
                    <button className="bg-transparent border-none cursor-pointer p-0"><EditIcon /></button>
                    <button className="bg-transparent border-none cursor-pointer p-0"><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotificationManagement;
