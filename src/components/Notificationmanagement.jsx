import React, { useState } from "react";

const styles = {
  page: { padding: "0px 18px", background: "#fff", minHeight: "100vh", fontFamily: "'Segoe UI', Arial, sans-serif" },
  topBar: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  pageTitle: { fontSize: 22, fontWeight: 600, color: "#111", margin: 0 },
  totalCount: { fontSize: 22, fontWeight: 600, color: "#111", border: "1.5px solid #222", borderRadius: 10, padding: "6px 20px" },
  filterBar: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
  searchWrapper: { display: "flex", alignItems: "center", background: "#fff", border: "1.5px solid #ddd", borderRadius: 24, padding: "7px 16px", flex: 1, gap: 8 },
  searchInput: { border: "none", outline: "none", fontSize: 14, color: "#333", width: "100%", background: "transparent" },
  addBtn: { display: "flex", alignItems: "center", gap: 4, border: "1.5px solid #ddd", borderRadius: 8, padding: "7px 14px", fontSize: 14, color: "#333", background: "#fff", cursor: "pointer", fontWeight: 500, whiteSpace: "nowrap" },
  select: {
    border: "1.5px solid #ddd", borderRadius: 8, padding: "7px 32px 7px 14px", fontSize: 14, color: "#333", background: "#fff",
    cursor: "pointer", appearance: "none", WebkitAppearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", outline: "none", minWidth: 120,
  },

 
  formSection: { background: "#f9faff", borderRadius: 12, padding: "24px", marginBottom: 28 },
  formLayout: { display: "flex", gap: 24 },
  formLeft: { display: "flex", flexDirection: "column", gap: 16, flex: 1 },
  formRight: { flex: 1 },
  formGroup: { display: "flex", flexDirection: "column", gap: 6 },
  formLabel: { fontSize: 13, color: "#333", fontWeight: 500 },
  formInput: { 
  border: "1px solid #ccc", 
  borderRadius: 6, 
  padding: "5px 8px",    
  fontSize: 13,         
  outline: "none", 
  background: "#fff",
  width: "60%",          
},
formTextarea: { 
  border: "1px solid #ccc", 
  borderRadius: 6, 
  padding: "5px 8px",    
  fontSize: 13,          
  outline: "none", 
  background: "#fff", 
  resize: "none", 
  height: 250,           
  width: "80%",          
},

  radioGroup: { display: "flex", alignItems: "center", gap: 24, marginTop: 4 },
  radioLabel: { display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#333", cursor: "pointer" },
  
  historyTitle: { fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 12 },
  tableWrapper: { border: "1.5px solid #e0e0e0", borderRadius: 4, overflow: "hidden" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { background: "#f0f0f0", color: "#333", fontWeight: 600, fontSize: 14, padding: "12px 18px", textAlign: "left", borderBottom: "1.5px solid #e0e0e0" },
  td: { fontSize: 14, color: "#333", padding: "13px 18px", textAlign: "left", borderBottom: "1px solid #f0f0f0" },
  actionCell: { display: "flex", alignItems: "center", gap: 10 },
  iconBtn: { background: "none", border: "none", cursor: "pointer", padding: 0 },
};

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="5" stroke="#888" strokeWidth="1.6" />
    <path d="M11 11l3 3" stroke="#888" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11 2l3 3-9 9H2v-3l9-9z" stroke="#333" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="3" y="4" width="10" height="10" rx="1" stroke="#333" strokeWidth="1.4" />
    <path d="M1 4h14M6 4V2h4v2" stroke="#333" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const historyData = Array(6).fill({ createdOn: "16 Jul 2025", title: "QPO50", tag: "QPO50", messageBody: "QPO50", status: "Active" });

function NotificationManagement() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [period, setPeriod] = useState("month");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState("all");

  return (
    <div style={styles.page}>
      <style>{`
  .poppins-title { font-family: 'Poppins', sans-serif !important; }
  .send-btn {
    background: #111 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 20px !important;
    padding: 5px 14px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    margin-top: 16px !important;
    display: inline-block !important;
    width: fit-content !important;
  }
`}</style>

      <hr />

     
      <div style={styles.topBar}>
        <h2 className="poppins-title" style={styles.pageTitle}>Notification Management</h2>
        <span style={styles.totalCount}>Total Count : 1150</span>
      </div>

      
      <div style={styles.filterBar}>
        <div style={styles.searchWrapper}>
          <SearchIcon />
          <input style={styles.searchInput} placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <button style={styles.addBtn}>+ Add</button>
        <select style={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select style={styles.select} value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="today">Today</option>
        </select>
      </div>

      <div style={styles.formSection}>
        <div style={styles.formLayout}>
         
          <div style={styles.formLeft}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Notification Title</label>
              <input style={styles.formInput} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Notification Tag</label>
              <input style={styles.formInput} value={tag} onChange={(e) => setTag(e.target.value)} />
            </div>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input type="radio" name="target" value="all" checked={target === "all"} onChange={() => setTarget("all")} />
                All
              </label>
              <label style={styles.radioLabel}>
                <input type="radio" name="target" value="customerList" checked={target === "customerList"} onChange={() => setTarget("customerList")} />
                Customer List
              </label>
            </div>
              <button className="send-btn">Send Notification</button>
          </div>

          
          <div style={styles.formRight}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Message</label>
              <textarea style={styles.formTextarea} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      
      <div style={styles.historyTitle}>Notification History</div>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              {["Created On", "Title", "Tag", "Message Body", "Status", "Action"].map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {historyData.map((row, i) => (
              <tr key={i} style={{ background: "#fff" }}>
                <td style={styles.td}>{row.createdOn}</td>
                <td style={styles.td}>{row.title}</td>
                <td style={styles.td}>{row.tag}</td>
                <td style={styles.td}>{row.messageBody}</td>
                <td style={styles.td}>{row.status}</td>
                <td style={styles.td}>
                  <div style={styles.actionCell}>
                    <button style={styles.iconBtn}><EditIcon /></button>
                    <button style={styles.iconBtn}><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotificationManagement;