import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import alarm from '../assets/alarm.png';
import person from '../assets/person.png';
import { useNavigate } from 'react-router-dom';

function Topbar({ heading, showSearch, username }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Clear user session/token
    localStorage.removeItem('token'); // or whatever you use
    navigate('/login');
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between px-4 py-2 bg-white margin"
      style={{ minHeight: 70 }}
    >
      <h2 className="fw-bold mb-0" style={{ color: '#222', fontSize: 36 }}>
        {heading}
      </h2>

      {showSearch && (
        <div
          className="mx-4"
          style={{ position: 'relative', maxWidth: 400, flexGrow: 1 }}
        >
          <FaSearch
            style={{
              position: 'absolute',
              top: '50%',
              left: '15px',
              transform: 'translateY(-50%)',
              color: '#999',
              fontSize: 16,
            }}
          />
          <input
            className="form-control ps-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              background: '#ffffff',
              border: 'solid 0.5px #a2a2a2',
              borderRadius: 40,
              fontWeight: 500,
            }}
          />
        </div>
      )}

      <div className="d-flex align-items-center gap-4 position-relative">
        <span
          className="text-secondary"
          style={{ cursor: 'pointer', color: '#515151', fontWeight: 'bold' }}
        >
          Riders
        </span>
        <span
          className="text-secondary"
          style={{ cursor: 'pointer', color: '#515151', fontWeight: 'bold' }}
        >
          Drivers
        </span>

        <span className="ms-3">
          <img
            src={alarm}
            alt="Notifications"
            style={{
              width: 45,
              height: 45,
              objectFit: 'contain',
              cursor: 'pointer',
            }}
          />
        </span>

        <span className="ms-2" style={{ position: 'relative' }}>
          <img
            src={person}
            alt="User"
            style={{
              width: 45,
              height: 45,
              borderRadius: '50%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {showDropdown && (
            <div
              className="position-absolute bg-white border shadow p-3"
              style={{
                right: 0,
                top: 55,
                borderRadius: 8,
                minWidth: 150,
                zIndex: 1000,
              }}
            >
              <div className="mb-2 fw-bold">{username}</div>
              <button
                onClick={handleLogout}
                className="btn btn-danger w-100"
              >
                Logout
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default Topbar;
