import React, { useCallback, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axiosTripInstance from '../../../services/api';
import { endpoints } from '../../../services/endpoints';
import LoadingSpinner from '../../common/LoadingSpinner';

const LiveRideRequest = () => {
  const [rideData, setRideData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = { page, limit, status };
      const response = await axiosTripInstance.get(endpoints.GET_LIVE_RIDE_REQUESTS(params));
      if (response.success) {
        setRideData(response.data.rides || response.data.rideRequests || []);
        setTotalCount(response.data.totalCount || 0);
        setTotalPages(response.data.pagination?.totalPages || 1);
      }
    } catch (error) { 

        console.error('Error fetching idle drivers:', error);
     }
    finally { setLoading(false); }
  },[page,status])

  useEffect(() => { fetchData(); }, [page, status,fetchData]);

  if (loading) return <LoadingSpinner message="Loading ride requests..." />;

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className="mb-3" />
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold mb-0">Live Ride Request</h4>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">Total Count : {totalCount}</div>
      </div>

      <div className="flex items-center justify-start gap-4 mb-3 flex-wrap gap-y-2.5">
        <div className="relative flex-[1_1_250px] max-w-[1000px]">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white" placeholder="Search" />
        </div>
        <select
          className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-[150px]"
          value={status}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
        >
          <option value="all">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="ONGOING">Ongoing</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        
          <table className="w-full mb-0 border border-gray-300 rounded-lg border-separate border-spacing-0 overflow-hidden">
            <thead><tr className="bg-gray-100">
              {['Request ID', 'Rider ID', 'Pickup Stop', 'Drop Stop', 'Seats', 'Status', 'Fare (Display / Discounted)', 'Date', 'Trip Type'].map((h) => (
                <th key={h} className="p-3 text-left text-sm font-semibold text-gray-700">{h}</th>
              ))}
            </tr></thead>
{rideData.length === 0 ? (
  <tr>
                <td colSpan={8} className="p-3 text-center">No ride requests available.</td>
              </tr>
        ) : (

            <tbody>
              {rideData.map((ride) => (
                <tr key={ride.rideRequestId} className="border-b border-gray-200">
                  <td className="p-3 text-sm">{ride.rideRequestId}</td>
                  <td className="p-3 text-sm">{ride.riderId}</td>
                  <td className="p-3 text-sm">{ride.pickupStop}</td>
                  <td className="p-3 text-sm">{ride.dropStop}</td>
                  <td className="p-3 text-sm">{ride.seats}</td>
                  <td className="p-3 text-sm">{ride.tripStatus}</td>
                  <td className="p-3 text-sm">₹{ride.tripDisplayFare} / ₹{ride.tripDiscountedFare}</td>
                  <td className="p-3 text-sm">{ride.tripDate ? new Date(ride.tripDate).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }) : '—'}</td>
                  <td className="p-3 text-sm">{ride.tripType}</td>
                </tr>
              ))}
            </tbody>
        )}
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

export default LiveRideRequest;
