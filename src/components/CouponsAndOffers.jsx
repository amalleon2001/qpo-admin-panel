import React, { useState } from 'react';
import SearchIcon from './common/SearchIcon';
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="10" rx="8" ry="5" stroke="#333" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2.5" stroke="#333" strokeWidth="1.5" />
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
  couponCode: 'QPO50',
  status: 'Active',
});

function CouponsAndOffers() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');
  const [form, setForm] = useState({});

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr />

      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">
          Coupons and Offers
        </h2>
        <span className="text-[22px] font-semibold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : 1150
        </span>
      </div>

      <div className="flex items-center gap-8 mb-5">
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
        <div className="text-base font-bold text-gray-900 mb-5">Coupon Info</div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {[
            'Coupon Title', 'Coupon Code', 'Discount Type',
            'Discount Value', 'Max Discount', 'Discount Value',
            'Per Day Limit', 'Use Limit', 'Minimum Amount to Apply',
            'Select Date Range', 'Description',
          ].map((label, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-700 font-medium">
                {label}<span className="text-red-500">*</span>
              </label>
              <input
                className="border border-gray-300 rounded-md py-2 px-2.5 text-sm outline-none bg-white"
                value={form[label] || ''}
                onChange={(e) => setForm({ ...form, [label]: e.target.value })}
              />
            </div>
          ))}
        </div>
        <button className="block ml-auto mt-4 bg-gray-900 text-white border-none rounded-[20px] py-2 px-6 text-sm font-semibold cursor-pointer">
          Save
        </button>
      </div>

      <div className="text-lg font-bold text-gray-900 mb-3">Coupons History</div>
      <div className="border-[1.5px] border-gray-300 rounded overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Created On', 'Coupon Code', 'Status', 'Action'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-left border-b-[1.5px] border-gray-300">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {historyData.map((row, i) => (
              <tr key={i} className="bg-white">
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.createdOn}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.couponCode}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.status}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-2.5">
                    <button className="bg-transparent border-none cursor-pointer p-0"><EyeIcon /></button>
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

export default CouponsAndOffers;
