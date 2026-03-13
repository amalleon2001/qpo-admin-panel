import { useState, useEffect } from 'react';
import SearchIcon from './common/SearchIcon';
import axiosBaseInstance from '../services/api';
import { endpoints } from '../services/endpoints';

function CompletedRides() {
  const [ridesData, setRidesData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  useEffect(() => {
    const fetchCompletedRides = async () => {
      try {
        const response = await axiosBaseInstance.get(endpoints.GET_COMPLETED_RIDES);
        setRidesData(response.data?.rides || []);
        setTotalCount(response.data?.totalCount || 0);
      } catch (error) {
        console.error('Error fetching completed rides:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompletedRides();
  }, []);

  const filtered = ridesData.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      String(r.rideId).toLowerCase().includes(search.toLowerCase()) ||
      r.pickup.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr />

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-xl">
          <span className="poppins-breadcrumb text-[22px] text-gray-400 font-medium cursor-pointer">All Rides</span>
          <span className="poppins-breadcrumb text-[22px] text-gray-400">&gt;</span>
          <span className="poppins-breadcrumb text-[22px] text-gray-900 font-semibold">Completed Rides</span>
        </div>
        <span className="text-lg font-bold text-black border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : {totalCount}
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
          <option value="open">Open</option>
          <option value="closed">Closed</option>
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
              {['Date', 'Time', 'Ride ID', 'Rider Name', 'Pickup', 'Drop', 'Driver Assigned', 'Fare'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-center border-b-[1.5px] border-gray-300">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="text-sm text-gray-700 py-3.25 px-4.5 text-center">Loading...</td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-sm text-gray-700 py-3.25 px-4.5 text-center">No completed rides found</td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={i} className="bg-white">
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.date}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.time}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.rideId}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.riderName}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.pickup}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.drop}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.driverAssigned}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-center border-b border-[#f0f0f0]">{row.fare}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompletedRides;
