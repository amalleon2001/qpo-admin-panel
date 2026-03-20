import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axiosTripInstance from '../../services/api';
import { endpoints } from '../../services/endpoints';
import tickIcon from '../../assets/tick.png';
import failedicon from '../../assets/Failedtoassigndriver.png';
import pairIcon from '../../assets/Failedpairing.png';
import alarm from '../../assets/alarm_on.png';
import rideRequestIcon from '../../assets/request.png';
import sosIcon from '../../assets/SOS.png';
import ComplaintsAndQueries from '../rider/complaintsAndQueries/ComplaintsAndQueries';
import PlaceholderPage from './PlaceholderPage';
import CancelledRides from '../rider/allRides/CancelledRides';
import CompletedRides from '../rider/allRides/CompletedRides';
import SalesReport from '../rider/salesReports/SalesReport';
import LiveAppActivity from '../rider/activityLogs/LiveAppActivity';
import PreviousReportsActivity from '../rider/activityLogs/PreviousReportsActivity';
import RideRequestLogs from '../rider/activityLogs/RideRequestLogs';
import RiderDatabase from '../rider/riderDatabase/RiderDatabase';
import AddCoupon from '../rider/couponsAndOffers/AddCoupon';
import CouponsHistory from '../rider/couponsAndOffers/CouponsHistory';
import AddNotification from '../rider/notifications/AddNotification';
import NotificationHistory from '../rider/notifications/NotificationHistory';

const StarSVG = () => (
  <svg width="25" height="25" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 2l2.5 6.2h6.5l-5.2 3.8 2 6.2L11 14 4.2 18.2l2-6.2L1 8.2h6.5z"
      stroke="#1976d2"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-[18px] pt-4.5 px-5 pb-4 shadow-[0_2px_12px_rgba(120,130,180,0.10)]">
      <div className="mb-2.5 leading-none">{icon}</div>
      <p className="text-gray-500 text-[13px] font-bold m-0 mb-1">{title}</p>
      <h2 className="text-[34px] font-extrabold text-gray-900 m-0 leading-tight">{value}</h2>
    </div>
  );
}

function AverageWaitingTime({ data }) {
  return (
    <div className="bg-white rounded-[18px] pt-4.5 px-5.5 pb-4 shadow-[0_2px_12px_rgba(120,130,180,0.10)]">
      <div className="flex items-center justify-center gap-2 mb-3.5">
        <img src={alarm} alt="Waiting Time" width={25} height={25} />
        <h4 className="text-[15px] font-extrabold text-center text-gray-900 m-0">Average Waiting Time</h4>
      </div>
      {[
        { label: 'Pairing', value: `${data.pairingMins} mins` },
        { label: 'Drivers Assigning', value: `${data.driverAssigningMins} mins` },
        { label: 'Drivers Arrival', value: `${data.driverArrivalMins} mins` },
      ].map((r) => (
        <div key={r.label} className="flex justify-between text-[13.5px] text-[#515151] py-1">
          <span className="font-semibold">{r.label}</span>
          <span className="font-bold text-[#515151]">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function AverageRating({ data }) {
  return (
    <div className="bg-white rounded-[18px] pt-4.5 px-5.5 pb-4 shadow-[0_2px_12px_rgba(120,130,180,0.10)]">
      <div className="flex items-center justify-center gap-2 mb-3.5">
        <StarSVG />
        <h4 className="text-[15px] font-extrabold text-center text-gray-900 m-0">Average Rating</h4>
      </div>
      {[
        { label: 'Rides', value: String(data.rides) },
        { label: 'Play store', value: String(data.playStore) },
        { label: 'App Store', value: String(data.appStore) },
      ].map((r) => (
        <div key={r.label} className="flex justify-between text-[13.5px] text-[#515151] py-1">
          <span className="font-semibold">{r.label}</span>
          <span className="font-bold text-[#515151]">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function SOSCard({ count }) {
  return (
    <div className="bg-white rounded-[18px] py-5 px-5.5 pb-4 shadow-[0_2px_12px_rgba(120,130,180,0.10)] flex flex-col items-center min-h-35">
      <div className="flex items-center justify-center gap-2 mb-2 w-full">
        <img src={sosIcon} alt="SOS" width={28} height={28} />
        <span className="text-[22px] font-extrabold text-red-600 tracking-wide">SOS</span>
      </div>
      <div className="text-[64px] font-black text-gray-900 leading-none mb-1 text-center">{String(count).padStart(2, '0')}</div>
      <a href="#" className="text-[13px] text-gray-700 cursor-pointer flex items-center gap-1.5 mt-auto self-end no-underline">
        <span>View more</span>
        <svg
          width="50"
          height="12"
          viewBox="0 0 50 12"
          className="inline-block align-middle"
        >
          <line x1="0" y1="6" x2="42" y2="6" stroke="#444" strokeWidth="1.5" />
          <polyline
            points="38,2 44,6 38,10"
            fill="none"
            stroke="#444"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

function RidersDashboard() {
  const [stats, setStats] = useState({
    completedRides: 0, totalRideRequests: 0, failedToAssignDriver: 0, failedToPair: 0,
    averageWaitingTime: { pairingMins: 0, driverAssigningMins: 0, driverArrivalMins: 0 },
    averageRating: { rides: 0, playStore: 0, appStore: 0 },
    sosCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axiosTripInstance.get(endpoints.GET_RIDER_DASHBOARD_STATS({}));
        if (response.success) setStats(response.data);
      } catch (error) { console.error('Error fetching rider dashboard stats:', error); }
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <div className="bg-dashboard-bg rounded-[28px] pt-7 px-6 pb-6">
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            icon={<img src={tickIcon} alt="Completed" width={50} height={50} />}
            title="Completed Rides"
            value={String(stats.completedRides)}
          />
          <StatCard
            icon={<img src={rideRequestIcon} alt="Ride Request" width={50} height={50} />}
            title="Total Ride Request"
            value={String(stats.totalRideRequests)}
          />
          <StatCard
            icon={<img src={failedicon} alt="Failed Assign" width={50} height={50} />}
            title="Failed to Assign Driver"
            value={String(stats.failedToAssignDriver)}
          />
          <StatCard
            icon={<img src={pairIcon} alt="Failed Pair" width={50} height={50} />}
            title="Failed to Pair"
            value={String(stats.failedToPair)}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <AverageWaitingTime data={stats.averageWaitingTime} />
          <AverageRating data={stats.averageRating} />
          <SOSCard count={stats.sosCount} />
        </div>
      </div>

      <div className="bg-dashboard-bg rounded-[28px] pt-7 px-6 pb-6 mt-4">
        <h3 className="text-xl font-bold text-gray-900 m-0 mb-3.5">QPo Ride Request View</h3>
        <div className="flex flex-row gap-9 items-center">
          <div className="bg-[#D9D9D9] rounded-[18px] w-[500px] shrink-0 h-[230px] flex items-center justify-center text-[42px] font-bold text-gray-900">
            Map
          </div>
          <div className="bg-white rounded-[18px] py-5 px-6 shadow-[0_2px_12px_rgba(120,130,180,0.10)] w-[350px] shrink-0">
            <span className="text-[15px] font-bold text-gray-900 text-center mb-3.5 block">New Installs</span>
            {[
              { label: 'Play Store', value: '100' },
              { label: 'App Store', value: '100' },
            ].map((r) => (
              <div key={r.label} className="flex justify-between text-[13.5px] text-[#515151] py-1">
                <span className="font-bold">{r.label}</span>
                <span className="font-semibold">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-right mt-3.5 pr-1">
          <a href="#" className="text-[13px] text-gray-700 underline font-medium cursor-pointer">
            View Previous Days &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

function RidersLayout() {
  const { ridersActive } = useOutletContext();

  switch (ridersActive) {
    case 'dashboard':
      return <RidersDashboard />;
    case 'complaints':
      return <ComplaintsAndQueries />;
    case 'cancelledRides':
      return <CancelledRides />;
    case 'completedRides':
      return <CompletedRides />;
    case 'sales':
      return <SalesReport />;
    case 'liveActivity':
      return <LiveAppActivity />;
    case 'previousReports':
      return <PreviousReportsActivity />;
    case 'rideRequestLogs':
      return <RideRequestLogs />;
    case 'riderDatabase':
      return <RiderDatabase />;
    case 'addCoupon':
      return <AddCoupon />;
    case 'couponsHistory':
      return <CouponsHistory />;
    case 'addNotification':
      return <AddNotification />;
    case 'notificationHistory':
      return <NotificationHistory />;
    default:
      return <PlaceholderPage title={ridersActive} />;
  }
}

export default RidersLayout;
