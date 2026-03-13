import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axiosBaseInstance from '../services/api';
import { endpoints } from '../services/endpoints';

const STATUS_OPTIONS = [
  { label: 'All Status', value: '' },
  { label: 'Pending', value: 'PENDING' },
  { label: 'Ongoing', value: 'ONGOING' },
  { label: 'Completed', value: 'COMPLETED' },
  { label: 'Canceled', value: 'CANCELED' },
  { label: 'Expired', value: 'EXPIRED' },
];

const NewTrip = () => {
  const [trips, setTrips] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const fetchTrips = async () => {
    try {
      const params = { page, limit };
      if (status) params.status = status;
      const response = await axiosBaseInstance.get(
        endpoints.GET_TRIPS_SUMMARY_TABLE(params)
      );
      if (response.success) {
        setTrips(response.data.trips);
        setTotalCount(response.data.totalCount);
        setTotalPages(response.data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, [page, status]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setPage(1);
  };

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold fs-20 mb-0 nav-path">
          <span style={{ color: 'grey', fontWeight: 'bold' }}>
            Live Pairing &gt;
          </span>{' '}
          New Trip
        </h4>
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
          value={status}
          onChange={handleStatusChange}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          style={{ borderRadius: 10, maxWidth: 150 }}
        >
          <option>This Month</option>
        </select>
      </div>

      <div className="table-responsive">
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
          <thead
            className="table-secondary"
            style={{
              backgroundColor: '#ffffffff',
              borderBottom: '1px solid #ccc',
            }}
          >
            <tr>
              <th style={{ padding: '12px', border: 'none' }}>Trip ID</th>
              <th style={{ padding: '12px', border: 'none' }}>Pair ID</th>
              <th style={{ padding: '12px', border: 'none' }}>Ride ID 1</th>
              <th style={{ padding: '12px', border: 'none' }}>Ride ID 2</th>
              <th style={{ padding: '12px', border: 'none' }}>Ride ID 3</th>
              <th style={{ padding: '12px', border: 'none' }}>
                Seats Combined
              </th>
              <th style={{ padding: '12px', border: 'none' }}>Route</th>
              <th style={{ padding: '12px', border: 'none' }}>Driver ID</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.trip_id}>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.trip_id}
                </td>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.pair_id}
                </td>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.ride_id_1}
                </td>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.ride_id_2}
                </td>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.ride_id_3 ?? '—'}
                </td>
                <td
                  style={{
                    padding: '10px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  {trip.seats_combined}
                </td>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    alignItems: 'center',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.route}
                </td>
                <td
                  style={{
                    padding: '12px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  {trip.driver_id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default NewTrip;
