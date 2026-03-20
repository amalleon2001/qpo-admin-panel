import React, { useCallback, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axiosTripInstance from '../../../services/api';
import { endpoints } from '../../../services/endpoints';

const STATUS_OPTIONS = [
  { label: 'All Status', value: '' }, { label: 'Pending', value: 'PENDING' },
  { label: 'Ongoing', value: 'ONGOING' }, { label: 'Completed', value: 'COMPLETED' },
  { label: 'Canceled', value: 'CANCELED' }, { label: 'Expired', value: 'EXPIRED' },
];

const NewTrip = () => {
  const [trips, setTrips] = useState([]); const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState(''); const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); const limit = 10;

  const fetchTrips = useCallback(async () => {
    try {
      const params = { page, limit }; if (status) params.status = status;
      const response = await axiosTripInstance.get(endpoints.GET_TRIPS_SUMMARY_TABLE(params));
      if (response.success) { setTrips(response.data.trips); setTotalCount(response.data.totalCount); setTotalPages(response.data.pagination.totalPages); }
    } catch (error) { console.error('Error fetching trips:', error); }
  }, [page, status]);

  useEffect(() => { fetchTrips(); }, [page, status,fetchTrips]);
  const handleStatusChange = (e) => { setStatus(e.target.value); setPage(1); };

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className="mb-3" />
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold mb-0 nav-path">
          <span className="text-gray-500 font-bold">Live Pairing &gt;</span> New Trip
        </h4>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">Total Count : {totalCount}</div>
      </div>

      <div className="flex items-center justify-start gap-4 mb-3 flex-wrap row-gap-2.5">
        <div className="relative flex-[1_1_250px] max-w-250">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white" placeholder="Search" />
        </div>
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-37.5" value={status} onChange={handleStatusChange}>
          {STATUS_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-37.5"><option>This Month</option></select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-0 border border-gray-300 rounded-lg border-separate border-spacing-0 overflow-hidden">
          <thead><tr className="bg-gray-100 border-b border-gray-300">
            {['Trip ID','Pair ID','Ride ID 1','Ride ID 2','Ride ID 3','Seats Combined','Route','Driver ID'].map(h =>
              <th key={h} className="p-3 text-left text-sm font-semibold text-gray-700 border-none">{h}</th>
            )}
          </tr></thead>
          {
            trips.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={8} className="p-3 text-center">No trips available.</td>
                </tr>
              </tbody>
            ) : (<tbody>
            {trips.map((trip) => (
              <tr key={trip.trip_id} className="border-b border-gray-300">
                <td className="p-3 text-sm border-none">{trip.trip_id}</td>
                <td className="p-3 text-sm border-none">{trip.pair_id}</td>
                <td className="p-3 text-sm border-none">{trip.ride_id_1}</td>
                <td className="p-3 text-sm border-none">{trip.ride_id_2}</td>
                <td className="p-3 text-sm border-none">{trip.ride_id_3 ?? '—'}</td>
                <td className="p-3 text-sm border-none text-center">{trip.seats_combined}</td>
                <td className="p-3 text-sm border-none">{trip.route}</td>
                <td className="p-3 text-sm border-none">{trip.driver_id}</td>
              </tr>
            ))}
          </tbody>)
          }
          
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-3">
          <button className="border border-gray-400 text-gray-600 text-sm py-1 px-3 rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed bg-white" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
          <span>Page {page} of {totalPages}</span>
          <button className="border border-gray-400 text-gray-600 text-sm py-1 px-3 rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed bg-white" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default NewTrip;
