import dashboardIcon from '../assets/grid_view.png';
import discountIcon from '../assets/discounts.png';
import headSet from '../assets/headset.png';
import autoRicksawIcon from '../assets/auto-ricksaw.png';
import msgIcon from '../assets/msg-icon.png';
import clippadIcon from '../assets/clip-pad.png';
import graphIcon from '../assets/graph.png';
import storageIcon from '../assets/storage-icon.png';

const ridersSidebarItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: (
      <img
        src={dashboardIcon}
        alt="Dashboard"
        className="w-6 h-6 ml-2.5"
      />
    ),
  },
  {
    key: 'complaints',
    label: 'Complaints and Queries',
    icon: (
      <img
        src={headSet}
        alt="Complaints"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
  },
  {
    key: 'allRides',
    label: 'All Rides',
    icon: (
      <img
        src={autoRicksawIcon}
        alt="All Rides"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
    children: [
      { key: 'cancelledRides', label: 'Cancelled Rides' },
      { key: 'completedRides', label: 'Completed Rides' },
    ],
  },
  {
    key: 'notifications',
    label: 'Notification Management',
    icon: (
      <img
        src={msgIcon}
        alt="Notifications"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
  },
  {
    key: 'coupons',
    label: 'Coupons and Offers',
    icon: (
      <img
        src={discountIcon}
        alt="Coupons"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
  },
  {
    key: 'sales',
    label: 'Sales Reports',
    icon: (
      <img
        src={clippadIcon}
        alt="Sales"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
  },
  {
    key: 'activityLogs',
    label: 'Activity Logs',
    icon: (
      <img
        src={graphIcon}
        alt="Activity Logs"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
    children: [
      {
        key: 'appActivity',
        label: 'App Activity Logs',
        children: [
          { key: 'liveActivity', label: 'Live App Activity' },
          { key: 'previousReports', label: 'Previous Reports' },
        ],
      },
      { key: 'rideRequestLogs', label: 'Ride Request Logs' },
    ],
  },
  {
    key: 'riderDatabase',
    label: 'Rider Database',
    icon: (
      <img
        src={storageIcon}
        alt="Rider Database"
        className="w-5.5 h-5.5 ml-2.5"
      />
    ),
  },
];

export default ridersSidebarItems;
