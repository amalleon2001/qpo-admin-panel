import dashboardIcon from "../assets/grid_view.png";
import discountIcon from "../assets/discounts.png";
import headSet from "../assets/headset.png";
import autoRicksawIcon from "../assets/auto-ricksaw.png";
import msgIcon from "../assets/msg-icon.png";
import clippadIcon from "../assets/clip-pad.png";
import graphIcon from "../assets/graph.png";
import storageIcon from "../assets/storage-icon.png";

const ridersSidebarItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <img src={dashboardIcon} alt="Dashboard" style={{ width: 24, height: 24, marginLeft: 10 }} />,
  },
  {
    key: "complaints",
    label: "Complaints and Queries",
    icon: <img src={headSet} alt="Complaints" style={{ width: 22, height: 22, marginLeft: 10 }} />,
  },
  {
    key: "allRides",
    label: "All Rides",
    icon: <img src={autoRicksawIcon} alt="All Rides" style={{ width: 22, height: 22, marginLeft: 10 }} />,
    children: [
      { key: "cancelledRides", label: "Cancelled Rides" },
      { key: "completedRides", label: "Completed Rides" },
    ],
  },
  {
    key: "notifications",
    label: "Notification Management",
    icon: <img src={msgIcon} alt="Notifications" style={{ width: 22, height: 22, marginLeft: 10 }} />,
  },
  {
    key: "coupons",
    label: "Coupons and Offers",
    icon: <img src={discountIcon} alt="Coupons" style={{ width: 22, height: 22, marginLeft: 10 }} />,
  },
  {
    key: "sales",
    label: "Sales Reports",
    icon: <img src={clippadIcon} alt="Sales" style={{ width: 22, height: 22, marginLeft: 10 }} />,
  },
  {
    key: "activityLogs",
    label: "Activity Logs",
    icon: <img src={graphIcon} alt="Activity Logs" style={{ width: 22, height: 22, marginLeft: 10 }} />,
    children: [
      {
        key: "appActivity",
        label: "App Activity Logs",
        children: [
          { key: "liveActivity", label: "Live App Activity" },
          { key: "previousReports", label: "Previous Reports" },
        ],
      },
      { key: "rideRequestLogs", label: "Ride Request Logs" }, 
    ],
  },
  {
    key: "riderDatabase",
    label: "Rider Database",
    icon: <img src={storageIcon} alt="Rider Database" style={{ width: 22, height: 22, marginLeft: 10 }} />,
  },
];

export default ridersSidebarItems;