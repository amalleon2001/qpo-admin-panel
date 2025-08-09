import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaEye, FaMapMarkerAlt } from 'react-icons/fa';

const LiveRideRequest = () => {
  const rideData = [
    {
      id: 'R2313',
      status: 'Waiting for Pairing',
      otp: '1234',
      rider: 'Bala suburamaniyam',
      driver: 'Bala suburamaniyam',
      driverId: 'AUTO_0001',
    },
    {
      id: 'R2314',
      status: 'Waiting for Driver Assigning',
      otp: '1234',
      rider: 'Venkatesh',
      driver: 'Venkatesh',
      driverId: 'AUTO_0001',
    },
    {
      id: 'R2315',
      status: 'Waiting for Driver Arrival',
      otp: '1234',
      rider: 'Dhiyaa',
      driver: 'Dhiyaa',
      driverId: 'AUTO_0001',
    },
    {
      id: 'R2316',
      status: 'Ongoing Ride',
      otp: '1234',
      rider: 'Preethi',
      driver: 'Preethi',
      driverId: 'AUTO_0001',
    },
    {
      id: 'R2317',
      status: 'Ride Completed',
      otp: '1234',
      rider: 'Vinoth',
      driver: 'Vinoth',
      driverId: 'AUTO_0001',
    },
    {
      id: 'R2318',
      status: 'Ride Cancelled',
      otp: '1234',
      rider: 'Ashwin',
      driver: 'Ashwin',
      driverId: 'AUTO_0001',
    },
  ];

  return (



    <div className="p-4 pt-0 bg-white">
        <hr></hr>
      <div className="d-flex justify-content-between align-items-center mb-3">
        
        <h4 className="fw-semibold mb-0">Live Ride Request</h4>
        <div className="fw-bold fs-5 border px-3 py-2 rounded-3">Total Count : 1150</div>
      </div>

<div className="d-flex align-items-center justify-content-start gap-4 mb-3 flex-wrap" style={{ flexWrap: 'wrap', rowGap: '10px' }}>
  <div className="position-relative" style={{ flex: '1 1 250px', maxWidth:'1000px' }}>
    <FaSearch className="position-absolute" style={{ top: 12, left: 12, color: '#888' }} />
    <input
      type="text"
      className="form-control ps-5"
      placeholder="Search"
      style={{ borderRadius: 10, width: '100%' }}
    />
  </div>


  <select className="form-select" style={{ borderRadius: 10, maxWidth: 150 }}>
    <option>All Status</option>
  </select>

  <select className="form-select" style={{ borderRadius: 10, maxWidth: 150 }}>
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
        <th style={{ padding: '12px', border: 'none' }}>Rider ID</th>
        <th style={{ padding: '12px', border: 'none' }}>Status</th>
        <th style={{ padding: '12px', border: 'none' }}>OTP</th>
        <th style={{ padding: '12px', border: 'none' }}>Action</th>
        <th style={{ padding: '12px', border: 'none' }}>Rider</th>
        <th style={{ padding: '12px', border: 'none' }}>Driver</th>
        <th style={{ padding: '12px', border: 'none' }}>Driver ID</th>
      </tr>
    </thead>
    <tbody>
      {rideData.map((ride, index) => (
        <tr
          key={index}
          style={{
            // border between rows
          }}
        >
          <td style={{ padding: '12px', border: 'none' ,borderBottom: '1px solid #363636'}}>{ride.id}</td>
          <td style={{ padding: '12px', border: 'none',borderBottom: '1px solid #363636'}}>{ride.status}</td>
          <td style={{ padding: '12px', border: 'none',borderBottom: '1px solid #363636' }}>{ride.otp}</td>
          <td style={{ padding: '12px', border: 'none',borderBottom: '1px solid #363636' }}>
            <div className="d-flex gap-2 justify-content-center">
              <FaEye />
              <FaMapMarkerAlt />
            </div>
          </td>
          <td style={{ padding: '12px', border: 'none',borderBottom: '1px solid #363636' }}>{ride.rider}</td>
          <td style={{ padding: '12px', border: 'none' ,borderBottom: '1px solid #363636'}}>{ride.driver}</td>
          <td style={{ padding: '12px', border: 'none',borderBottom: '1px solid #363636' }}>{ride.driverId}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



    </div>
  );
};

export default LiveRideRequest;
