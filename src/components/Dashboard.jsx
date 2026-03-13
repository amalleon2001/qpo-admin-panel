import React, { useEffect, useState } from 'react';
import liveDemandIcon from '../assets/paid.png';
import tick from '../assets/tick.png';
import wrong from '../assets/wrong.png';
import auto from '../assets/auto.png';
import driver from '../assets/Vector.png';
import alarmon from '../assets/alarm_on.png';
import liveDriverIcon from '../assets/f7_person-3-fill.png';
import axiosBaseInstance from '../services/api';
import { endpoints } from '../services/endpoints';
import StatCard from './dashboard/StatCard';

const cardBg = '#fff';
const cardShadow = '5px 5px 10px 15px rgba(152, 152, 152, 0.06)';
const dashboardBg = '#F9FAFF';

function Dashboard() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalCompletedRides: 0,
    totalCancelledRides: 0,
    totalOngoingRides: 0,
    totalActiveUsers: 0,
  });

  const fetchDashboardData = async () => {
    try {
      const response = await axiosBaseInstance.get(
        endpoints.GET_ALL_ADMIN_PANEL_DATA
      );
      if (response.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="p-4 m-0">
      <div style={{ background: dashboardBg, borderRadius: 50 }}>
        {/* First Row */}
        <div className="row px-4 pt-4">
          <StatCard
            icon={
              <img
                src={liveDemandIcon}
                alt="Revenue"
                style={{ width: 50, height: 50 }}
              />
            }
            title="Revenue Today"
            value={`₹${stats.totalRevenue}`}
            highlight
          />
          <StatCard
            icon={
              <img
                src={tick}
                alt="Completed Rides"
                style={{ width: 50, height: 50 }}
              />
            }
            title="Completed Rides"
            value={String(stats.totalCompletedRides)}
          />
          <StatCard
            icon={
              <img
                src={wrong}
                alt="Cancelled Rides"
                style={{ width: 50, height: 50 }}
              />
            }
            title="Cancelled Rides"
            value={String(stats.totalCancelledRides)}
          />
          <StatCard
            icon={
              <img
                src={auto}
                alt="Ongoing Rides"
                style={{ width: 50, height: 50 }}
              />
            }
            title="Ongoing Rides"
            value={String(stats.totalOngoingRides)}
          />
        </div>

        {/* Second Row */}
        <div className="row g-5 px-4 pt-4 pb-4">
          <StatCard
            layout="sideBySideTitle"
            icon={
              <img
                src={liveDriverIcon}
                alt="Riders"
                style={{ width: 33, height: 33 }}
              />
            }
            title="Riders"
            highlight
            value={[
              { label: 'Active users', data: String(stats.totalActiveUsers) },
              { label: 'Ride Request', data: '100' },
            ]}
          />
          <StatCard
            layout="sideBySideTitle"
            icon={
              <img
                src={driver}
                alt="Drivers"
                style={{ width: 23, height: 27 }}
              />
            }
            title="Drivers"
            value={[
              { label: 'Online now', data: '90' },
              { label: 'Present Today', data: '100' },
            ]}
          />
          <StatCard
            layout="sideBySideTitle"
            icon={
              <img
                src={alarmon}
                alt="Average Time"
                style={{ width: 24, height: 24 }}
              />
            }
            title="Average Time"
            value={[
              { label: 'Pairing Riders', data: '2 mins' },
              { label: 'Assigning Drivers', data: '2 mins' },
            ]}
          />
        </div>
      </div>

      <div style={{ background: dashboardBg, borderRadius: 50 }}>
        {/* Map + Today Summary */}
        <div className="row g-4 px-4 mt-3">
          <div className="col-lg-5">
            <div className="card-body">
              <h5 className="fw-bold fs-4 mb-3" style={{ color: '#222' }}>
                QPo Hotspot Map View
              </h5>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{
                  height: 220,
                  borderRadius: 18,
                  fontSize: 40,
                  color: '#D9D9D9',
                  background: '#e0e0e0',
                }}
              >
                <p
                  className="fw-bold"
                  style={{ color: '#000000', fontSize: '48' }}
                >
                  Map
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card h-50 mt-5 ms-5"
              style={{
                borderRadius: 18,
                background: cardBg,
                boxShadow: cardShadow,
              }}
            >
              <div className="card-body">
                <h5
                  className="fw-semibold mb-4 d-flex justify-content-center  "
                  style={{ color: '#222' }}
                >
                  Overall Today
                </h5>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between">
                    <span>Ride Request</span>
                    <span>100</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rider Signup</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Previous Days */}
        <div className="text-end px-5 py-3">
          <a
            href="#"
            className="text-decoration-underline fw-medium"
            style={{ color: '#363636' }}
          >
            View Previous Days &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
