import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import alarm from '../../assets/alarm.png';
import person from '../../assets/person.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function TopBar({ heading, showSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const isRidersActive = location.pathname === '/dashboard/riders';
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white" style={{ minHeight: 70 }}>
      <h2 className="font-bold mb-0" style={{ color: '#222', fontSize: 36 }}>{heading}</h2>

      {showSearch && (
        <div className="mx-4 relative grow" style={{ maxWidth: 400 }}>
          <FaSearch style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#999', fontSize: 16 }} />
          <input className="w-full py-2 pl-10 pr-4 bg-white font-medium rounded-full outline-none" type="search" placeholder="Search" aria-label="Search"
            style={{ border: 'solid 0.5px #a2a2a2' }} />
        </div>
      )}

      <div className="flex items-center gap-4 relative">
        <span className="cursor-pointer font-bold" style={{ color: !isRidersActive ? '#0C6CFC' : '#757474' }} onClick={() => navigate('/dashboard')}>Drivers</span>
        <span className="cursor-pointer font-bold" style={{ color: isRidersActive ? '#0C6CFC' : '#757474' }} onClick={() => navigate('/dashboard/riders')}>Riders</span>
        <span className="ml-3">
          <img src={alarm} alt="Notifications" className="w-[45px] h-[45px] object-contain cursor-pointer" />
        </span>
        <span className="ml-2 relative">
          <img src={person} alt="User" className="w-[45px] h-[45px] rounded-full object-cover cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
          {showDropdown && (
            <div className="absolute bg-white border border-gray-200 shadow-md p-3 rounded-lg" style={{ right: 0, top: 55, minWidth: 150, zIndex: 1000 }}>
              <div className="mb-2 font-bold">{user?.name || 'Admin'}</div>
              <button onClick={handleLogout} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 cursor-pointer border-none font-medium">Logout</button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default TopBar;
