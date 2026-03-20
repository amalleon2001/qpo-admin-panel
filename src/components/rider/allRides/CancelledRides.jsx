import React, { useCallback, useEffect, useState } from 'react';
import axiosTripInstance from '../../../services/api';
import { endpoints } from '../../../services/endpoints';
import SearchIcon from '../../common/SearchIcon';
import DateRangePicker from '../../common/DateRangePicker';

function CancelledRides() {
  const [search, setSearch] = useState('');
  const [stage, setStage] = useState('all');
  const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
  const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
  const [rides, setRides] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCancelledRides = useCallback(async () => {
    try {
      const startDate = new Date(fromDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(toDate);
      endDate.setHours(23, 59, 59, 999);
      const params = { page, limit: 10, stage, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
      const response = await axiosTripInstance.get(endpoints.GET_CANCELLED_RIDES(params));
      if (response.success) {
        setRides(response.data.rides);
        setTotalCount(response.data.totalCount);
        setTotalPages(response.data.pagination.totalPages);
        console.log(response.data);
      }
    } catch (error) { console.error('Error fetching cancelled rides:', error); }
  }, [page, fromDate, toDate, stage]);

  useEffect(() => { fetchCancelledRides(); }, [fetchCancelledRides]);

  const filtered = rides.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      String(r.rideId).toLowerCase().includes(search.toLowerCase()) ||
      r.reasonGiven.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr className='mb-3'/>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="poppins-breadcrumb text-[22px] text-gray-400 font-medium cursor-pointer">
            All Rides
          </span>
          <span className="poppins-breadcrumb text-[22px] text-gray-400">&gt;</span>
          <span className="poppins-breadcrumb text-[22px] text-gray-900 font-semibold">
            Cancelled Rides
          </span>
        </div>
        <span className="text-lg font-bold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : {totalCount}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <DateRangePicker
          fromDate={fromDate}
          toDate={toDate}
          onFromChange={setFromDate}
          onToChange={setToDate}
        />
        <div className="flex items-center bg-white border-[1.5px] border-gray-300 rounded-lg py-1.75 px-3.5 flex-1 gap-2">
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
          value={stage}
          onChange={(e) => { setStage(e.target.value); setPage(1); }}
        >
          <option value="all">All Stages</option>
          <option value="PENDING">Pending</option>
          <option value="ONGOING">Ongoing</option>
          <option value="ASSIGNED">Assigned</option>
        </select>
      </div>

      <div className="border-[1.5px] border-gray-300 rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Date', 'Time', 'Ride ID', 'Rider Name', 'Stage when Cancelled', 'Reason Given', 'Driver Assigned'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-center border-b-[1.5px] border-gray-300">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center text-sm text-gray-500 py-8">
                  {fromDate === toDate
                    ? `No cancelled rides on ${new Date(fromDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
                    : `No cancelled rides from ${new Date(fromDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} - ${new Date(toDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
                  }
                </td>
              </tr>
            ) : filtered.map((row, i) => (
              <tr key={row.rideId} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.date}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.time}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.rideId}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.riderName}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.stageWhenCancelled}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.reasonGiven}</td>
                <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.driverAssigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            className="px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-lg bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg border cursor-pointer ${
                p === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
          <button
            className="px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-lg bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default CancelledRides;
