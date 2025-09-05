import logoImg from '../assets/blue in white bg original logo (1) 1.png';
import dashboardIcon from '../assets/grid_view.png';
import liveRideIcon from '../assets/mingcute_computer-camera-fill.png';
import demandIcon from '../assets/cell_tower.png';
import rightArrow from '../assets/right-arrow.png';
import downArrow from '../assets/down-arrow.png';
import previousReportsIcon from '../assets/healthicons_city-outline.png';
import algorithmIcon from '../assets/hugeicons_computer-programming-01.png';

const sidebarBg = '#f7f9fb';
const sidebarActive = '#0C6CFC';
const sidebarActiveText = '#fff';
const sidebarText = '#222';

const sidebarItems = [
  {
    key: 'Daily Operations',
    label: 'Dashboard',
    icon: <img src={dashboardIcon} alt="Dashboard" style={{ width: 24, height: 24, marginLeft: 10 }} />,
  },
  {
    key: 'log',
    label: 'Live Activities Log',
    icon: <img src={liveRideIcon} alt="Log" style={{ width: 22, height: 22, marginLeft: 10 }} />,
    children: [
      { key: 'liveRide', label: 'Live Ride Request' },
      {
        key: 'pairing',
        label: 'Live Pairing',
        children: [
          { key: 'newTrip', label: 'New Trip' },
          { key: 'refillingTrip', label: 'Refilling Trip' },
        ],
      },
      {
        key: 'liveDriver',
        label: 'Live Driver Assigning',
        children: [
          { key: 'idleDrivers', label: 'Idle Drivers' },
          { key: 'ongoingDrivers', label: 'Ongoing Drivers' },
        ],
      }
    ],
  },
  {
    key: 'demand',
    label: 'Demand and Hotspot',
    icon: <img src={demandIcon} alt="Demand" style={{ width: 20, height: 20, marginLeft: 10 }} />,
    children: [
      { key: 'liveDemand', label: 'Live Demand' },
      { key: 'previousReports', label: 'Previous Reports' },
    ],
  },
  {
    key: 'geofence',
    label: 'Geofence',
    icon: <img src={previousReportsIcon} alt="Geofence" style={{ width: 20, height: 20, marginLeft: 10 }} />,
  },
  {
    key: 'algorithm',
    label: 'Algorithm',
    icon: <img src={algorithmIcon} alt="Algorithm" style={{ width: 20, height: 20, marginLeft: 10 }} />,
    children: [
      { key: 'pricingAlgorithm', label: 'Pricing Algorithm' },
      { key: 'driverAlgorithm', label: 'Driver Algorithm' },
    ],
  },
];

// Get the first child key recursively
const getFirstChildKey = (item) => {
  if (!item.children || item.children.length === 0) return item.key;
  return getFirstChildKey(item.children[0]);
};

function Sidebar({ active, setActive, openMenus, setOpenMenus }) {
  const handleToggle = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClick = (item) => {
    if (item.children) {
      setOpenMenus((prev) => ({ ...prev, [item.key]: true }));
      const firstChildKey = getFirstChildKey(item);
      setActive(firstChildKey);
    } else {
      setActive(item.key);
    }
  };

  const renderItems = (items, level = 0) => (
    <ul className="nav flex-column mb-0" style={{ paddingLeft: level ? 16 : 0 }}>
      {items.map((item) => (
        <li key={item.key} className="nav-item">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="#"
              className="nav-link"
              style={{
                background: active === item.key ? sidebarActive : 'transparent',
                color: active === item.key ? sidebarActiveText : sidebarText,
                fontWeight: active === item.key ? 600 : 400,
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 16,
                paddingLeft: item.icon && level === 0 ? 0 : 32,
              }}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
            >
              {item.icon && <span className="me-2">{item.icon}</span>}
              {item.label}
            </a>
            {item.children && (
              <button
                className="btn btn-link btn-sm px-1"
                style={{ color: '#888' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(item.key);
                }}
                aria-label="Toggle submenu"
              >
                <img
                  src={openMenus[item.key] ? downArrow : rightArrow}
                  alt={openMenus[item.key] ? 'Collapse' : 'Expand'}
                  style={{
                    width: 16,
                    height: 16,
                    opacity: 1,
                  }}
                />
              </button>
            )}
          </div>
          {item.children && openMenus[item.key] && renderItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="d-flex flex-column flex-shrink-0 ps-3 border-end vh-100" style={{ width: 260, background: sidebarBg }}>
      {/* Scrollbar styling inline */}
      <style>{`
        .sidebar-scroll {
          flex: 1;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        .sidebar-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: ${sidebarBg};
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background-color: #c5d1e0;
          border-radius: 10px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #9bb4d1;
        }
        .sidebar-scroll {
          scrollbar-width: thin;
          scrollbar-color: #c5d1e0 ${sidebarBg};
        }
      `}</style>

      <div className="d-flex align-items-center m-2">
        <img
          src={logoImg}
          alt="Logo"
          style={{ width: 56, height: 56, marginRight: 12, objectFit: 'cover' }}
        />
        <span className="fw-bold" style={{ color: '#000000ff', fontSize: '48px' }}>
          QPo
        </span>
      </div>

      <div className="sidebar-scroll">
        {renderItems(sidebarItems)}
      </div>

      <div className="mt-auto text-muted small">Admin 2</div>
    </div>
  );
}

export default Sidebar;
