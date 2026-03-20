import logoImg from '../../assets/Qpo-logo.png';
import dashboardIcon from '../../assets/grid_view.png';
import liveRideIcon from '../../assets/mingcute_computer-camera-fill.png';
import demandIcon from '../../assets/cell_tower.png';
import rightArrow from '../../assets/right-arrow.png';
import downArrow from '../../assets/down-arrow.png';
import previousReportsIcon from '../../assets/healthicons_city-outline.png';
import algorithmIcon from '../../assets/hugeicons_computer-programming-01.png';

const sidebarItems = [
  { key: 'Daily Operations', label: 'Dashboard', icon: <img src={dashboardIcon} alt="Dashboard" style={{ width: 24, height: 24, marginLeft: 10 }} /> },
  { key: 'log', label: 'Live Activities Log', icon: <img src={liveRideIcon} alt="Log" style={{ width: 22, height: 22, marginLeft: 10 }} />,
    children: [
      { key: 'liveRide', label: 'Live Ride Request' },
      { key: 'pairing', label: 'Live Pairing', children: [{ key: 'newTrip', label: 'New Trip' }, { key: 'refillingTrip', label: 'Refilling Trip' }] },
      { key: 'liveDriver', label: 'Live Driver Assigning', children: [{ key: 'idleDrivers', label: 'Idle Drivers' }, { key: 'ongoingDrivers', label: 'Ongoing Drivers' }] },
    ],
  },
  { key: 'demand', label: 'Demand and Hotspot', icon: <img src={demandIcon} alt="Demand" style={{ width: 20, height: 20, marginLeft: 10 }} />,
    children: [{ key: 'liveDemand', label: 'Live Demand' }, { key: 'previousReports', label: 'Previous Reports' }],
  },
  { key: 'geofence', label: 'Geofence', icon: <img src={previousReportsIcon} alt="Geofence" style={{ width: 20, height: 20, marginLeft: 10 }} /> },
  { key: 'algorithm', label: 'Algorithm', icon: <img src={algorithmIcon} alt="Algorithm" style={{ width: 20, height: 20, marginLeft: 10 }} />,
    children: [{ key: 'pricingAlgorithm', label: 'Pricing Algorithm' }, { key: 'driverAlgorithm', label: 'Driver Algorithm' }],
  },
];

const getFirstChildKey = (item) => {
  if (!item.children || item.children.length === 0) return item.key;
  return getFirstChildKey(item.children[0]);
};

function Sidebar({ active, setActive, openMenus, setOpenMenus }) {
  const handleToggle = (key) => { setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] })); };
  const handleClick = (item) => {
    if (item.children) { setOpenMenus((prev) => ({ ...prev, [item.key]: true })); setActive(getFirstChildKey(item)); }
    else { setActive(item.key); }
  };

  const renderItems = (items, level = 0) => (
    <ul className="flex flex-col mb-0 list-none p-0" style={{ paddingLeft: level ? 16 : 0 }}>
      {items.map((item) => (
        <li key={item.key}>
          <div className="flex items-center">
            <a href="#" className="no-underline py-2 px-3 rounded flex-1 flex items-center gap-2 text-sm"
              style={{
                background: active === item.key ? '#0C6CFC' : 'transparent',
                color: active === item.key ? '#fff' : '#222',
                fontWeight: active === item.key ? 600 : 400,
                paddingLeft: item.icon && level === 0 ? 0 : 32,
              }}
              onClick={(e) => { e.preventDefault(); handleClick(item); }}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </a>
            {item.children && (
              <button className="px-1 bg-transparent border-none cursor-pointer" style={{ color: '#888' }}
                onClick={(e) => { e.stopPropagation(); handleToggle(item.key); }} aria-label="Toggle submenu">
                <img src={openMenus[item.key] ? downArrow : rightArrow} alt={openMenus[item.key] ? 'Collapse' : 'Expand'} style={{ width: 16, height: 16, opacity: 1 }} />
              </button>
            )}
          </div>
          {item.children && openMenus[item.key] && renderItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex flex-col shrink-0 pl-3 border-r border-gray-200 h-screen" style={{ width: 280, background: '#f7f9fb' }}>
      <div className="flex items-center m-2">
        <img src={logoImg} alt="Logo" style={{ width: 56, height: 56, marginRight: 12, objectFit: 'cover' }} />
        <span className="font-bold" style={{ color: '#000', fontSize: '48px' }}>QPo</span>
      </div>
      <div className="sidebar-scroll">{renderItems(sidebarItems)}</div>
      <div className="mt-auto text-gray-500 text-sm p-2">Admin 2</div>
    </div>
  );
}

export default Sidebar;
