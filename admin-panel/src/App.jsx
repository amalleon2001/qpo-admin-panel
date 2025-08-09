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

import FullScreenStyles from './components/FullScreenStyles';
import PricingAlgorithm from './components/pricing-algorithm';
import DriverAlgorithm from './components/Driver-algorithm';

function App() {
  const [active, setActive] = useState('Daily Operations');
  const [openMenus, setOpenMenus] = useState({});

  // Define parent headings mapping
  const getParentHeading = (activeKey) => {
    // Live Activities Log children
    const liveActivitiesChildren = [
      'log',
      'liveRide',
      'pairing',
      'newTrip',
      'refillingTrip',
      'liveDriver',
      'idleDrivers',
      'ongoingDrivers'
    ];

    // Demand and Hotspot children
    const demandChildren = [
      'demand',
      'liveDemand',
      'previousReports'
    ];

    // Algorithm children
    const algorithmChildren = [
      'algorithm',
      'pricingAlgorithm',
      'driverAlgorithm'
    ];

    // Check which parent group the active key belongs to
    if (liveActivitiesChildren.includes(activeKey)) {
      return 'Live Activities Log';
    } else if (demandChildren.includes(activeKey)) {
      return 'Demand and Hotspot';
    } else if (algorithmChildren.includes(activeKey)) {
      return 'Algorithm';
    } else if (activeKey === 'geofence') {
      return 'Geofence';
    } else if (activeKey === 'Daily Operations') {
      return 'Dashboard';
    } else {
      return activeKey; // fallback to the original key
    }
  };

  // Set heading using the parent mapping
  const heading = getParentHeading(active);

  // Render page content
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
    case 'pairing':
      content = <PlaceholderPage title={active} />;
      break;
    case 'demand':
    case 'liveDemand':
    case 'previousReports':
    case 'geofence':
    case 'algorithm':
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
          active={active}
          setActive={setActive}
          openMenus={openMenus}
          setOpenMenus={setOpenMenus}
        />
        <div
          className="flex-grow-1 d-flex flex-column"
          style={{ minWidth: 0, height: '100vh', overflow: 'auto' }}
        >
          <Topbar heading={heading} />
          {content}
        </div>
      </div>
    </>
  );
}

export default App;