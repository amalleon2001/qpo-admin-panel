import { useState } from 'react';

import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PlaceholderPage from './components/PlaceholderPage';
import LiveRideRequest from './components/liveriderequest';
import NewTrip from './components/newtrip';
import RefillingTrip from './components/refilling-trip';
import IdleDrivers from './components/idledrivers';
import OngoingDrivers from './components/OngoingDrivers';
import LiveDemand from './components/LiveDemand';
import RideDirection from './components/livedemandtable'; 
import HotspotTable from './components/hotspottable';

import FullScreenStyles from './components/FullScreenStyles';
import PricingAlgorithm from './components/pricing-algorithm';
import DriverAlgorithm from './components/Driver-algorithm';

function App() {
  const [active, setActive] = useState('Daily Operations');
  const showSearch = active === "Daily Operations"; 
  const [openMenus, setOpenMenus] = useState({});
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedDirection, setSelectedDirection] = useState(null);
  const sidebarActive = active === 'ridedirection' || active === 'hotspot' ? 'liveDemand' : active;

  



 const getParentHeading = (activeKey) => {
  const liveActivitiesChildren = [
    'log', 'liveRide', 'pairing', 'newTrip', 'refillingTrip', 'liveDriver', 
    'idleDrivers', 'ongoingDrivers'
  ];
  const demandChildren = ['demand', 'liveDemand', 'ridedirection', 'previousReports','hotspot']; 
  const algorithmChildren = ['algorithm', 'pricingAlgorithm', 'driverAlgorithm'];

  if (liveActivitiesChildren.includes(activeKey)) return 'Live Activities Log';
  if (demandChildren.includes(activeKey)) return 'Demand and Hotspot';  
  if (algorithmChildren.includes(activeKey)) return 'Algorithm';
  if (activeKey === 'geofence') return 'Geofence';
  if (activeKey === 'Daily Operations') return 'Dashboard';
  return activeKey;
};


  const heading = getParentHeading(active);

  let content;

  switch (active) {
    case 'Daily Operations':
      
      content = <Dashboard />;
      break;
    case 'liveRide':
      content = <LiveRideRequest />;
      break;
    case 'newTrip':
      content = <NewTrip />;
      break;
    case 'refillingTrip':
      content = <RefillingTrip />;
      break;
    case 'liveDriver':
    case 'idleDrivers':
      content = <IdleDrivers />;
      break;
    case 'ongoingDrivers':
      content = <OngoingDrivers />;
      break;
    case 'demand':
    case 'liveDemand':
    content = <LiveDemand onViewDirection={route => { setSelectedRoute(route); setActive('ridedirection'); }} />;
    break;
  case 'ridedirection':
    content = <RideDirection
      routeName={selectedRoute}
      onBack={() => setActive('liveDemand')}
      onViewHotspot={direction => { setSelectedDirection(direction); setActive('hotspot'); }}
    />;
    break;
  case 'hotspot':
    content = <HotspotTable onBack={() => setActive('ridedirection')} data={selectedDirection} />;
    break;
    case 'previousReports':
      content = <PlaceholderPage title="Previous Reports" />;
      break;
    case 'geofence':
    case 'algorithm':
      content = <PlaceholderPage title={active} />;
      break;
    case 'pricingAlgorithm':
      content = <PricingAlgorithm />;
      break;
    case 'driverAlgorithm':
      content = <DriverAlgorithm />;
      break;
    default:
      content = <PlaceholderPage title={active} />;
  }

  return (
    <>
      <FullScreenStyles />
      <div
        className="d-flex"
        style={{
          background: '#ffffffff',
          minHeight: '100vh',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
      <Sidebar
  active={sidebarActive}  
  setActive={setActive}
  openMenus={openMenus}
  setOpenMenus={setOpenMenus}
/>
        <div
          className="flex-grow-1 d-flex flex-column"
          style={{ minWidth: 0, height: '100vh', overflow: 'auto' }}
        >
         <Topbar heading={heading} showSearch={showSearch} />

          {content}
        </div>
      </div>
    </>
  );
}

export default App;
