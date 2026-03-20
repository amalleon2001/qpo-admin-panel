import { useEffect } from 'react';
import ridersSidebarItems from './RidersSidebarItems';
import logoImg from '../../assets/Qpo-logo.png';
import rightArrow from '../../assets/right-arrow.png';
import downArrow from '../../assets/down-arrow.png';

const getFirstChildKey = (item) => {
  if (!item.children || item.children.length === 0) return item.key;
  return getFirstChildKey(item.children[0]);
};

function RidersSidebar({ active, setActive, openMenus, setOpenMenus }) {
  useEffect(() => { setActive('dashboard'); }, [setActive]);

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
                paddingLeft: item.icon && level === 0 ? 0 : 36,
              }}
              onClick={(e) => { e.preventDefault(); handleClick(item); }}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </a>
            {item.children && (
              <button className="px-1 bg-transparent border-none cursor-pointer"
                onClick={(e) => { e.stopPropagation(); handleToggle(item.key); }}>
                <img src={openMenus[item.key] ? downArrow : rightArrow} alt="toggle" style={{ width: 16, height: 16 }} />
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
      {renderItems(ridersSidebarItems)}
    </div>
  );
}

export default RidersSidebar;
