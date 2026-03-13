import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axiosBaseInstance from '../services/api';
import { endpoints } from '../services/endpoints';
import LoadingSpinner from './common/LoadingSpinner';

const LiveRideRequest = () => {
  const [rideData, setRideData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosBaseInstance.get(
        endpoints.GET_LIVE_RIDE_REQUESTS({ page, limit })
      );
      if (response.success) {
        setRideData(response.data.rides || response.data.rideRequests || []);
        setTotalCount(response.data.totalCount || 0);
        setTotalPages(response.data.pagination?.totalPages || 1);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch ride requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  if (loading) return <LoadingSpinner message="Loading ride requests..." />;
  if (error) return <p className="text-center text-danger py-3">{error}</p>;

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold mb-0">Live Ride Request</h4>
        <div className="fw-bold fs-5 border px-3 py-2 rounded-3">
          Total Count : {totalCount}
        </div>
      </div>

      <div
        className="d-flex align-items-center justify-content-start gap-4 mb-3 flex-wrap"
        style={{ flexWrap: 'wrap', rowGap: '10px' }}
      >
        <div
          className="position-relative"
          style={{ flex: '1 1 250px', maxWidth: '1000px' }}
        >
          <FaSearch
            className="position-absolute"
            style={{ top: 12, left: 12, color: '#888' }}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
            style={{ borderRadius: 10, width: '100%' }}
          />
        </div>

        <select
          className="form-select"
          style={{ borderRadius: 10, maxWidth: 150 }}
        >
          <option>All Status</option>
        </select>

        <select
          className="form-select"
          style={{ borderRadius: 10, maxWidth: 150 }}
        >
          <option>This Month</option>
        </select>
      </div>

      <div className="table-responsive">
        {rideData.length === 0 ? (
          <p className="text-center py-3 mb-0">No ride requests available.</p>
        ) : (
          <table
            className="table mb-0"
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              borderCollapse: 'separate',
              borderSpacing: 0,
              overflow: 'hidden',
            }}
          >
            <thead className="table-secondary">
              <tr>
                <th>Request ID</th>
                <th>Rider ID</th>
                <th>Pickup Stop</th>
                <th>Drop Stop</th>
                <th>Seats</th>
                <th>Status</th>
                <th>Fare (Display / Discounted)</th>
                <th>Date</th>
                <th>Trip Type</th>
              </tr>
            </thead>
            <tbody>
              {rideData.map((ride) => (
                <tr key={ride.rideRequestId}>
                  <td>{ride.rideRequestId}</td>
                  <td>{ride.riderId}</td>
                  <td>{ride.pickupStop}</td>
                  <td>{ride.dropStop}</td>
                  <td>{ride.seats}</td>
                  <td>{ride.tripStatus}</td>
                  <td>
                    ₹{ride.tripDisplayFare} / ₹{ride.tripDiscountedFare}
                  </td>
                  <td>
                    {ride.tripDate
                      ? new Date(ride.tripDate).toLocaleString('en-IN', {
                          dateStyle: 'short',
                          timeStyle: 'short',
                        })
                      : '—'}
                  </td>
                  <td>{ride.tripType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveRideRequest;
