import React, { useEffect, useState } from "react";
import { FaSearch, FaEye, FaMapMarkerAlt } from "react-icons/fa";

const LiveRideRequest = () => {
  const [rideData, setRideData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://13.203.102.99:3030/api/trip/live_ride_requests", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
          },
        });

        const data = await res.json();

        // Debug: log full raw response
        console.log("🔴 Raw API Response:", data);

        // Check if data contains rideRequests key or direct array
        if (Array.isArray(data)) {
          setRideData(data); // case 1: API returns array directly
        } else if (data.rideRequests) {
          setRideData(data.rideRequests); // case 2: inside rideRequests
        } else if (data.data) {
          setRideData(data.data); // case 3: inside 'data' key
        } else {
          console.warn("⚠️ No recognized ride data structure");
          setRideData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey, apiUrl]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 pt-0 bg-white">
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold mb-0">Live Ride Request</h4>
        <div className="fw-bold fs-5 border px-3 py-2 rounded-3">
          Total Count : {rideData.length}
        </div>
      </div>

      {/* Search & Filters */}
      <div
        className="d-flex align-items-center justify-content-start gap-4 mb-3 flex-wrap"
        style={{ flexWrap: "wrap", rowGap: "10px" }}
      >
        <div
          className="position-relative"
          style={{ flex: "1 1 250px", maxWidth: "1000px" }}
        >
          <FaSearch
            className="position-absolute"
            style={{ top: 12, left: 12, color: "#888" }}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
            style={{ borderRadius: 10, width: "100%" }}
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

      {/* Table */}
      <div className="table-responsive">
        {rideData.length === 0 ? (
          <p className="text-center py-3 mb-0">No ride requests available.</p>
        ) : (
          <table
            className="table mb-0"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              borderCollapse: "separate",
              borderSpacing: 0,
              overflow: "hidden",
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rideData.map((ride, idx) => (
                <tr key={ride.ride_request_id || idx}>
                  <td>{ride.ride_request_id}</td>
                  <td>{ride.rider_id}</td>
                  <td>{ride.pickup_stop_id}</td>
                  <td>{ride.drop_stop_id}</td>
                  <td>{ride.seats}</td>
                  <td>{ride.trip_status}</td>
                  <td>
                    {ride.trip_display_fare} / {ride.trip_discounted_fare}
                  </td>
                  <td>
                    {ride.trip_date
                      ? new Date(ride.trip_date).toLocaleString("en-IN", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })
                      : "--"}
                  </td>
                  <td>{ride.trip_type}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <FaEye />
                      <FaMapMarkerAlt />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LiveRideRequest;
