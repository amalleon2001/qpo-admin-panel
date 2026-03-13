import React, { useEffect, useState } from 'react';
import liveDemandIcon from '../assets/paid.png';
import tick from '../assets/tick.png';
import wrong from '../assets/wrong.png';
import auto from '../assets/auto.png';
import driver from '../assets/Vector.png';
import alarmon from '../assets/alarm_on.png';
import liveDriverIcon from '../assets/f7_person-3-fill.png';
import axiosBaseInstance, { axiosDriverInstance } from '../services/api';
import { endpoints } from '../services/endpoints';
import StatCard from './dashboard/StatCard';

function Dashboard() {
  const [stats, setStats] = useState({ totalRevenue: 0, totalCompletedRides: 0, totalCancelledRides: 0, totalOngoingRides: 0, totalActiveUsers: 0, presentOnlineDrivers: 0, totalDriversCameOnline: 0, activeRideRequests: 0, newRidersToday: 0 });

  const fetchDashboardData = async () => {
    try {
      const response = await axiosBaseInstance.get(endpoints.GET_ALL_ADMIN_PANEL_DATA);
      if (response.success) setStats(prev => ({ ...prev, ...response.data }));
    } catch (error) { console.error('Error fetching dashboard data:', error); }
  };

  const fetchDriverData = async () => {
    try {
      const response = await axiosDriverInstance.get(endpoints.GET_DRIVER_ADMIN_PANEL_DATA);
      console.log(response.data);
      
      if (response.success) setStats(prev => ({ ...prev, ...response.data }));
    } catch (error) { console.error('Error fetching driver data:', error); }
  };

  useEffect(() => { fetchDashboardData(); fetchDriverData(); }, []);

  return (
    <div className="p-4 m-0">
      <div style={{ background: '#F9FAFF', borderRadius: 50 }}>
        <div className="grid grid-cols-12 gap-4 px-4 pt-4">
          <StatCard icon={<img src={liveDemandIcon} alt="Revenue" style={{ width: 50, height: 50 }} />} title="Revenue Today" value={`₹${stats.totalRevenue}`} highlight />
          <StatCard icon={<img src={tick} alt="Completed Rides" style={{ width: 50, height: 50 }} />} title="Completed Rides" value={String(stats.totalCompletedRides)} />
          <StatCard icon={<img src={wrong} alt="Cancelled Rides" style={{ width: 50, height: 50 }} />} title="Cancelled Rides" value={String(stats.totalCancelledRides)} />
          <StatCard icon={<img src={auto} alt="Ongoing Rides" style={{ width: 50, height: 50 }} />} title="Ongoing Rides" value={String(stats.totalOngoingRides)} />
        </div>

        <div className="grid grid-cols-12 gap-5 px-4 pt-4 pb-4">
          <StatCard layout="sideBySideTitle" icon={<img src={liveDriverIcon} alt="Riders" style={{ width: 33, height: 33 }} />} title="Riders" highlight
            value={[{ label: 'Active users', data: String(stats.totalActiveUsers) }, { label: 'Ride Request', data: String(stats.activeRideRequests) }]} />
          <StatCard layout="sideBySideTitle" icon={<img src={driver} alt="Drivers" style={{ width: 23, height: 27 }} />} title="Drivers"
            value={[{ label: 'Online now', data: String(stats.presentOnlineDrivers||0) }, { label: 'Present Today', data: String(stats.totalDriversCameOnline||0) }]} />
          <StatCard layout="sideBySideTitle" icon={<img src={alarmon} alt="Average Time" style={{ width: 24, height: 24 }} />} title="Average Time"
            value={[{ label: 'Pairing Riders', data: '2 mins' }, { label: 'Assigning Drivers', data: '2 mins' }]} />
        </div>
      </div>

      <div style={{ background: '#F9FAFF', borderRadius: 50 }}>
        <div className="grid grid-cols-12 gap-4 px-4 mt-3">
          <div className="col-span-12 lg:col-span-5">
            <div className="p-4">
              <h5 className="font-bold text-2xl mb-3" style={{ color: '#222' }}>QPo Hotspot Map View</h5>
              <div className="flex items-center justify-center" style={{ height: 220, borderRadius: 18, fontSize: 40, color: '#D9D9D9', background: '#e0e0e0' }}>
                <p className="font-bold" style={{ color: '#000', fontSize: '48px' }}>Map</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="h-1/2 mt-5 ml-5 rounded-2xl bg-white" style={{ boxShadow: '5px 5px 10px 15px rgba(152, 152, 152, 0.06)' }}>
              <div className="p-4">
                <h5 className="font-semibold mb-4 flex justify-center" style={{ color: '#222' }}>Overall Today</h5>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between"><span>Ride Request</span><span>{String(stats.totalRideRequests)}</span></div>
                  <div className="flex justify-between"><span>Rider Signup</span><span>{String(stats.newRidersToday)}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right px-5 py-3">
          <a href="#" className="underline font-medium" style={{ color: '#363636' }}>View Previous Days &raquo;</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
