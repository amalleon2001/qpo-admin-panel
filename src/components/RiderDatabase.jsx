import React, { useState } from 'react';

const styles = {
  page: {
    padding: '0px 18px',
    background: '#fff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pageTitle: { fontSize: 22, fontWeight: 600, color: '#111', margin: 0 },
  totalCount: {
    fontSize: 22,
    fontWeight: 600,
    color: '#111',
    border: '1.5px solid #222',
    borderRadius: 10,
    padding: '6px 20px',
  },
  filterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    marginBottom: 16,
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    border: '1.5px solid #ddd',
    borderRadius: 24,
    padding: '7px 16px',
    flex: 1,
    gap: 8,
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    fontSize: 14,
    color: '#333',
    width: '100%',
    background: 'transparent',
  },
  select: {
    border: '1.5px solid #ddd',
    borderRadius: 8,
    padding: '7px 32px 7px 14px',
    fontSize: 14,
    color: '#333',
    background: '#fff',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    outline: 'none',
    minWidth: 130,
  },
  tableWrapper: {
    border: '1.5px solid #e0e0e0',
    borderRadius: 4,
    overflow: 'auto',
  },
  table: { width: '100%', borderCollapse: 'collapse', minWidth: 900 },
  th: {
    background: '#f0f0f0',
    color: '#333',
    fontWeight: 600,
    fontSize: 14,
    padding: '12px 18px',
    textAlign: 'center',
    borderBottom: '1.5px solid #e0e0e0',
    whiteSpace: 'nowrap',
  },
  td: {
    fontSize: 14,
    color: '#333',
    padding: '13px 18px',
    textAlign: 'center',
    borderBottom: '1px solid #f0f0f0',
    whiteSpace: 'nowrap',
  },
  eyeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
};

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="5" stroke="#888" strokeWidth="1.6" />
    <path
      d="M11 11l3 3"
      stroke="#888"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="10" rx="8" ry="5" stroke="#333" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2.5" stroke="#333" strokeWidth="1.5" />
  </svg>
);

const sampleData = Array(6).fill({
  signupDate: '16 Jul 2025',
  time: '08:35',
  rideId: 'R0001',
  riderName: 'Manisha',
  mobileNumber: '0123456789',
  gender: 'Female',
  installSource: 'Deeplink',
  campaign: 'Whatsapp',
});

function RiderDatabase() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  return (
    <div style={styles.page}>
      <style>{`.poppins-title { font-family: 'Poppins', sans-serif !important; }`}</style>

      <hr />

      <div style={styles.topBar}>
        <h2 className="poppins-title" style={styles.pageTitle}>
          Rider database
        </h2>
        <span style={styles.totalCount}>Total Count : 1150</span>
      </div>

      <div style={styles.filterBar}>
        <div style={styles.searchWrapper}>
          <SearchIcon />
          <input
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          style={styles.select}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select
          style={styles.select}
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="today">Today</option>
        </select>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              {[
                'Action',
                'Signup Date',
                'Time',
                'Ride ID',
                'Rider Name',
                'Mobile Number',
                'Gender',
                'Install Source',
                'Campaign',
              ].map((h) => (
                <th key={h} style={styles.th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, i) => (
              <tr key={i} style={{ background: '#fff' }}>
                <td style={styles.td}>
                  <button style={styles.eyeBtn}>
                    <EyeIcon />
                  </button>
                </td>
                <td style={styles.td}>{row.signupDate}</td>
                <td style={styles.td}>{row.time}</td>
                <td style={styles.td}>{row.rideId}</td>
                <td style={styles.td}>{row.riderName}</td>
                <td style={styles.td}>{row.mobileNumber}</td>
                <td style={styles.td}>{row.gender}</td>
                <td style={styles.td}>{row.installSource}</td>
                <td style={styles.td}>{row.campaign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RiderDatabase;
