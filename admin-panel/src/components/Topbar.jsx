import { FaSearch } from 'react-icons/fa';
import alarm from '../assets/alarm.png';
import person from '../assets/person.png';

function Topbar({ heading, showSearch}) {
  return (
    <div className="d-flex align-items-center justify-content-between px-4 py-2 bg-white margin" style={{ minHeight: 70 }}>
      <h2 className="fw-bold mb-0" style={{ color: '#222', fontSize: 36 }}>
        {heading}
      </h2>
 {showSearch && (
      <div className="mx-4" style={{ position: 'relative', maxWidth: 400, flexGrow: 1 }}>
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

      <div className="d-flex align-items-center gap-4">
        <span className="text-secondary" style={{ cursor: 'pointer', color: '#515151', fontWeight: 'bold' }}>
          Riders
        </span>
        <span className="text-secondary" style={{ cursor: 'pointer', color: '#515151', fontWeight: 'bold' }}>
          Drivers
        </span>

        <span className="ms-3">
          <img
            src={alarm}
            alt="Notifications"
            style={{ width: 45, height: 45, objectFit: 'contain', cursor: 'pointer' }}
          />
        </span>

        <span className="ms-2">
          <img
            src={person}
            alt="User"
            style={{ width: 45, height: 45, borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
          />
        </span>
      </div>
    </div>
  );
}

export default Topbar;
