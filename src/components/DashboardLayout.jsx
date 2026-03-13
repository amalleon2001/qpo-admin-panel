import { Outlet, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import ErrorBoundary from './common/ErrorBoundary';

import RidersSidebar from './RidersSidebar';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import PlaceholderPage from './PlaceholderPage';
import LiveRideRequest from './LiveRideRequest';
import NewTrip from './NewTrip';
import RefillingTrip from './RefillingTrip';
import IdleDrivers from './IdleDrivers';
import OngoingDrivers from './OngoingDrivers';
import LiveDemand from './LiveDemand';
import RideDirection from './LiveDemandTable';
import HotspotTable from './HotspotTable';
import PreviousReports from './PreviousReports';
import ReportDetails from './ReportDetails';
import GeofenceTable from './GeofenceTable';

import FullScreenStyles from './FullScreenStyles';
import PricingAlgorithm from './PricingAlgorithm';
import DriverAlgorithm from './DriverAlgorithm';

function DashboardLayout() {
  const {
    active, setActive, ridersActive, setRidersActive,
    openMenus, setOpenMenus, selectedRoute, setSelectedRoute,
    selectedDirection, setSelectedDirection,
  } = useSidebar();

  const location = useLocation();
  const isRidersPage = location.pathname.startsWith('/dashboard/riders');
  const showSearch = !isRidersPage ? active === 'Daily Operations' : ridersActive === 'dashboard';

  const sidebarActive =
    active === 'ridedirection' || active === 'hotspot' ? 'liveDemand'
    : active === 'reportDetails' || active === 'hotspotDetails' ? 'previousReports'
    : active;

  const getParentHeading = (activeKey) => {
    const liveActivitiesChildren = ['log','liveRide','pairing','newTrip','refillingTrip','liveDriver','idleDrivers','ongoingDrivers'];
    const demandChildren = ['demand','liveDemand','ridedirection','previousReports','reportDetails','hotspot','hotspotDetails'];
    const algorithmChildren = ['algorithm','pricingAlgorithm','driverAlgorithm'];
    if (liveActivitiesChildren.includes(activeKey)) return 'Live Activities Log';
    if (demandChildren.includes(activeKey)) return 'Demand and Hotspot';
    if (algorithmChildren.includes(activeKey)) return 'Algorithm';
    if (activeKey === 'geofence') return 'Geofence';
    if (activeKey === 'Daily Operations') return 'Dashboard';
    return activeKey;
  };

  const getRidersHeading = (activeKey) => {
    if (!activeKey) return 'Riders';
    const ridersMap = {
      dashboard: 'Riders', complaints: 'Complaints and Queries', allRides: 'All Rides',
      cancelledRides: 'Cancelled Rides', completedRides: 'Completed Rides',
      notifications: 'Notification Management', coupons: 'Coupons and Offers',
      sales: 'Sales Reports', activityLogs: 'Activity Logs', appActivity: 'App Activity Logs',
      liveActivity: 'Activity Logs', previousReports: 'Activity Logs',
      rideRequestLogs: 'Ride Request Logs', riderDatabase: 'Rider Database',
    };
    return ridersMap[activeKey] || 'Riders';
  };

  const heading = isRidersPage ? getRidersHeading(ridersActive) : getParentHeading(active);

  let content;
  switch (active) {
    case 'Daily Operations': content = <Dashboard />; break;
    case 'liveRide': content = <LiveRideRequest />; break;
    case 'newTrip': content = <NewTrip />; break;
    case 'refillingTrip': content = <RefillingTrip />; break;
    case 'liveDriver': case 'idleDrivers': content = <IdleDrivers />; break;
    case 'ongoingDrivers': content = <OngoingDrivers />; break;
    case 'demand': case 'liveDemand':
      content = <LiveDemand onViewDirection={(route) => { setSelectedRoute(route); setActive('ridedirection'); }} />;
      break;
    case 'ridedirection':
      content = <RideDirection routeName={selectedRoute} onBack={() => setActive('liveDemand')} onViewHotspot={(direction) => { setSelectedDirection(direction); setActive('hotspot'); }} />;
      break;
    case 'hotspot':
      content = <HotspotTable onBack={() => setActive('ridedirection')} data={selectedDirection} />;
      break;
    case 'previousReports':
      content = <PreviousReports onViewReport={(report) => { setSelectedRoute(report.route); setActive('reportDetails'); }} />;
      break;
    case 'reportDetails':
      content = <ReportDetails routeName={selectedRoute} onBack={() => setActive('previousReports')} onViewHotspot={(direction) => { setSelectedDirection(direction); setActive('hotspotDetails'); }} />;
      break;
    case 'hotspotDetails':
      content = <HotspotTable onBack={() => setActive('reportDetails')} data={selectedDirection} />;
      break;
    case 'geofence': content = <GeofenceTable />; break;
    case 'algorithm': content = <PlaceholderPage title={active} />; break;
    case 'pricingAlgorithm': content = <PricingAlgorithm />; break;
    case 'driverAlgorithm': content = <DriverAlgorithm />; break;
    default: content = <PlaceholderPage title={active} />;
  }

  return (
    <>
      <FullScreenStyles />
      <div className="flex bg-white min-h-screen h-screen w-screen overflow-hidden">
        {isRidersPage ? (
          <RidersSidebar active={ridersActive} setActive={setRidersActive} openMenus={openMenus} setOpenMenus={setOpenMenus} />
        ) : (
          <Sidebar active={sidebarActive} setActive={setActive} openMenus={openMenus} setOpenMenus={setOpenMenus} />
        )}
        <div className="grow flex flex-col min-w-0 h-screen overflow-auto">
          <Topbar heading={heading} showSearch={showSearch} />
          <ErrorBoundary>
            {location.pathname.startsWith('/dashboard/riders') ? (
              <Outlet context={{ ridersActive, setRidersActive }} />
            ) : content}
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
