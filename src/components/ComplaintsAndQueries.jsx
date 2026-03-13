import React, { useState } from 'react';

const styles = {
  page: {
    padding: '0px 15px',
    background: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },

  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontFamily: "'Poppins' !important",
    fontWeight: 600,
    color: '#111',
    margin: 0,
    paddingLeft: 12,
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
    borderRadius: 8,
    padding: '6px 14px',
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
  },

  tableWrapper: {
    background: '#fff',

    border: '1.5px solid #e0e0e0',
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
    padding: '12px 16px',
    textAlign: 'center',
    borderBottom: '1.5px solid #e0e0e0',
  },
  td: {
    fontSize: 14,
    color: '#333',
    padding: '13px 16px',
    textAlign: 'center',
    borderBottom: '1px solid #f0f0f0',
  },
};

const sampleData = Array(6).fill({
  date: '16 Jul 2025',
  time: '10:00',
  ticketId: 'INFO#001',
  type: 'Ride',
  riderId: 'R0001',
  riderName: 'Manisha',
  category: 'Driver Behavior',
  preview: 'Driver Charged Extra Fare',
});

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

function ComplaintsAndQueries() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('month');

  const filtered = sampleData.filter(
    (r) =>
      r.riderName.toLowerCase().includes(search.toLowerCase()) ||
      r.ticketId.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <hr />

      <div style={styles.topBar}>
        <h2 style={styles.pageTitle}>Complaints and Queries</h2>
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
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="pending">Pending</option>
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
                'Date',
                'Time',
                'Ticket ID',
                'Type',
                'Rider ID',
                'Rider Name',
                'Category',
                'Preview',
              ].map((h) => (
                <th key={h} style={styles.th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}
              >
                <td style={styles.td}>{row.date}</td>
                <td style={styles.td}>{row.time}</td>
                <td style={styles.td}>{row.ticketId}</td>
                <td style={styles.td}>{row.type}</td>
                <td style={styles.td}>{row.riderId}</td>
                <td style={styles.td}>{row.riderName}</td>
                <td style={styles.td}>{row.category}</td>
                <td style={styles.td}>{row.preview}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintsAndQueries;
