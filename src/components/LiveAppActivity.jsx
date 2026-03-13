import React, { useState } from 'react';

const styles = {
  page: {
    padding: '0px 18px',
    background: '#fff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },

  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  breadcrumbLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 15,
  },
  breadcrumbParent: {
    color: '#696969',
    fontWeight: 500,
    fontSize: 22,
    cursor: 'pointer',
  },
  breadcrumbSeparator: {
    color: '#999',
    fontSize: 22,
  },
  breadcrumbCurrent: {
    color: '#111',
    fontWeight: 600,
    fontSize: 22,
  },
  totalCount: {
    fontSize: 22,
    fontWeight: 700,
    color: '#111',
    border: '1.5px solid #222',
    borderRadius: 10,
    padding: '6px 20px',
  },

  filterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
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
    overflow: 'hidden',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    background: '#f0f0f0',
    color: '#333',
    fontWeight: 600,
    fontSize: 14,
    padding: '12px 18px',
    textAlign: 'center',
    borderBottom: '1.5px solid #e0e0e0',
  },
  td: {
    fontSize: 14,
    color: '#333',
    padding: '13px 18px',
    textAlign: 'center',
    borderBottom: '1px solid #f0f0f0',
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

const sampleData = [
  {
    userType: 'Returning User',
    appOpenedAt: '10:05',
    appOpenedVia: 'Notification',
    riderId: 'CUS0001',
    riderName: 'Manisha',
    pickupSearched: 'Auto fetched',
    dropSearched: 'Bharathi Nagar',
  },
  ...Array(5).fill({
    userType: 'New User',
    appOpenedAt: '10:05',
    appOpenedVia: 'Notification',
    riderId: 'CUS0001',
    riderName: 'Manisha',
    pickupSearched: 'Auto fetched',
    dropSearched: 'Bharathi Nagar',
  }),
];

function LiveAppActivity() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  const filtered = sampleData.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      r.riderId.toLowerCase().includes(search.toLowerCase()) ||
      r.userType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <style>{`
        .poppins-breadcrumb {
          font-family: 'Poppins', sans-serif !important;
        }
      `}</style>

      <hr />

      <div style={styles.breadcrumb}>
        <div style={styles.breadcrumbLeft}>
          <span className="poppins-breadcrumb" style={styles.breadcrumbParent}>
            Activity Logs
          </span>
          <span
            className="poppins-breadcrumb"
            style={styles.breadcrumbSeparator}
          >
            &gt;
          </span>
          <span className="poppins-breadcrumb" style={styles.breadcrumbParent}>
            App Activity Logs
          </span>
          <span
            className="poppins-breadcrumb"
            style={styles.breadcrumbSeparator}
          >
            &gt;
          </span>
          <span className="poppins-breadcrumb" style={styles.breadcrumbCurrent}>
            Live App Activity
          </span>
        </div>
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
          <option value="new">New User</option>
          <option value="returning">Returning User</option>
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
                'User Type',
                'App Opened at',
                'App Opened Via',
                'Rider ID',
                'Rider Name',
                'Pickup Searched',
                'Drop Searched',
              ].map((h) => (
                <th key={h} style={styles.th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} style={{ background: '#fff' }}>
                <td style={styles.td}>{row.userType}</td>
                <td style={styles.td}>{row.appOpenedAt}</td>
                <td style={styles.td}>{row.appOpenedVia}</td>
                <td style={styles.td}>{row.riderId}</td>
                <td style={styles.td}>{row.riderName}</td>
                <td style={styles.td}>{row.pickupSearched}</td>
                <td style={styles.td}>{row.dropSearched}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiveAppActivity;
