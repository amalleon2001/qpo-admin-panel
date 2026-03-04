import React from "react";
import { useOutletContext } from "react-router-dom";
import tickIcon from "../assets/tick.png";
import failedicon from "../assets/failedtoassigndriver.png";
import pairIcon from "../assets/failedpairing.png";
import alarm from "../assets/alarm_on.png";
import rideRequestIcon from "../assets/request.png";
import sosIcon from "../assets/SOS.png";
import ComplaintsAndQueries from "./complaintsandqueries";
import PlaceholderPage from "./PlaceholderPage";
import CancelledRides from "./Cancelled-rides";
import CompletedRides from "./CompletedRides";
import SalesReport from "./Salesreport";
import LiveAppActivity from "./Liveappactivity";
import PreviousReportsActivity from "./PreviousReportsActivity";
import RideRequestLogs from "./RideRequestLogs";
import RiderDatabase from "./Riderdatabase";
import CouponsAndOffers from "./Couponsandoffers";
import NotificationManagement from "./Notificationmanagement";


const BG = "#f9faff";
const WHITE = "#fff";
const SHADOW = "0 2px 12px rgba(120,130,180,0.10)";
const RADIUS = 18;

const styles = {
  page: {
    padding: "24px",
    background: "#fff",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  inner: {
    background: BG,
    borderRadius: 28,
    padding: "28px 24px 24px",
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  },
  statCard: {
    background: WHITE,
    borderRadius: RADIUS,
    padding: "18px 20px 16px",
    boxShadow: SHADOW,
  },
  statIcon: {
    marginBottom: 10,
    lineHeight: 0,
  },
  statTitle: {
    color: "#666",
    fontSize: 13,
    fontWeight: 700,
    margin: 0,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 34,
    fontWeight: 800,
    color: "#111",
    margin: 0,
    lineHeight: 1.1,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginTop: 16,
  },
  wideCard: {
    background: WHITE,
    borderRadius: RADIUS,
    padding: "18px 22px 16px",
    boxShadow: SHADOW,
  },
  wideHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 14,
  },
  wideTitle: {
    fontSize: 15,
    fontWeight: 800,
    textAlign: "center",
    color: "#111",
    margin: 0,
  },
  wideRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13.5,
    color: "#515151",
    padding: "4px 0",
  },
  wideRowValue: {
    fontWeight: 700,
    color: "#515151",
  },
  sosCard: {
    background: "#fff",
    borderRadius: 18,
    padding: "20px 22px 16px",
    boxShadow: SHADOW,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 140,
  },
  sosHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 8,
    width: "100%",
  },
  sosLabel: {
    fontSize: 22,
    fontWeight: 800,
    color: "#e53935",
    letterSpacing: 1,
  },
  sosNumber: {
    fontSize: 64,
    fontWeight: 900,
    color: "#111",
    lineHeight: 1,
    marginBottom: 4,
    textAlign: "center",
  },
  viewMore: {
    fontSize: 13,
    color: "#444",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginTop: "auto",
    alignSelf: "flex-end",
    textDecoration: "none",
  },
  bottomTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#111",
    margin: "0 0 14px 0",
  },
  bottomGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 36,
    alignItems: "center",
  },
  mapBox: {
    background: "#D9D9D9",
    borderRadius: RADIUS,
    width: 500,
    flexShrink: 0,
    height: 230,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 42,
    fontWeight: 700,
    color: "#111",
  },
  installCard: {
    background: WHITE,
    borderRadius: RADIUS,
    padding: "20px 24px",
    boxShadow: SHADOW,
    width: 350,
    flexShrink: 0,
  },
  installTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#111",
    textAlign: "center",
    marginBottom: 14,
    display: "block",
  },
  installRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13.5,
    color: "#515151",
    padding: "4px 0",
  },
  installValue: {
    fontWeight: 600,
  },
  viewPrev: {
    textAlign: "right",
    marginTop: 14,
    paddingRight: 4,
  },
  viewPrevLink: {
    fontSize: 13,
    color: "#333",
    textDecoration: "underline",
    fontWeight: 500,
    cursor: "pointer",
  },
};


const StarSVG = () => (
  <svg width="25" height="25" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 2l2.5 6.2h6.5l-5.2 3.8 2 6.2L11 14 4.2 18.2l2-6.2L1 8.2h6.5z"
      stroke="#1976d2"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);


function StatCard({ icon, title, value }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statIcon}>{icon}</div>
      <p style={styles.statTitle}>{title}</p>
      <h2 style={styles.statValue}>{value}</h2>
    </div>
  );
}

function AverageWaitingTime() {
  return (
    <div style={styles.wideCard}>
      <div style={styles.wideHeader}>
        <img src={alarm} alt="Waiting Time" width={25} height={25} />
        <h4 style={styles.wideTitle}>Average Waiting Time</h4>
      </div>
      {[
        { label: "Pairing", value: "2 mins" },
        { label: "Drivers Assigning", value: "2 mins" },
        { label: "Drivers Arrival", value: "2 mins" },
      ].map((r) => (
        <div key={r.label} style={styles.wideRow}>
          <span style={{ fontWeight: 600 }}>{r.label}</span>
          <span style={styles.wideRowValue}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function AverageRating() {
  return (
    <div style={styles.wideCard}>
      <div style={styles.wideHeader}>
        <StarSVG />
        <h4 style={styles.wideTitle}>Average Rating</h4>
      </div>
      {[
        { label: "Rides", value: "3.5" },
        { label: "Play store", value: "3.5" },
        { label: "App Store", value: "3.5" },
      ].map((r) => (
        <div key={r.label} style={styles.wideRow}>
          <span style={{ fontWeight: 600 }}>{r.label}</span>
          <span style={styles.wideRowValue}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function SOSCard() {
  return (
    <div style={styles.sosCard}>
      <div style={styles.sosHeader}>
        <img src={sosIcon} alt="SOS" width={28} height={28} />
        <span style={styles.sosLabel}>SOS</span>
      </div>
      <div style={styles.sosNumber}>01</div>
      <a href="#" style={styles.viewMore}>
        <span>View more</span>
        <svg width="50" height="12" viewBox="0 0 50 12" style={{ display: "inline-block", verticalAlign: "middle" }}>
          <line x1="0" y1="6" x2="42" y2="6" stroke="#444" strokeWidth="1.5" />
          <polyline points="38,2 44,6 38,10" fill="none" stroke="#444" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}


function RidersDashboard() {
  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        
        <div style={styles.grid4}>
          <StatCard
            icon={<img src={tickIcon} alt="Completed" width={50} height={50} />}
            title="Completed Rides"
            value="1000"
          />
          <StatCard
            icon={<img src={rideRequestIcon} alt="Ride Request" width={50} height={50} />}
            title="Total Ride Request"
            value="1000"
          />
          <StatCard
            icon={<img src={failedicon} alt="Failed Assign" width={50} height={50} />}
            title="Failed to Assign Driver"
            value="20"
          />
          <StatCard
            icon={<img src={pairIcon} alt="Failed Pair" width={50} height={50} />}
            title="Failed to Pair"
            value="30"
          />
        </div>

        
        <div style={styles.grid3}>
          <AverageWaitingTime />
          <AverageRating />
          <SOSCard />
        </div>
      </div>

    
      <div style={{ ...styles.inner, marginTop: 16 }}>
        <h3 style={styles.bottomTitle}>QPo Ride Request View</h3>
        <div style={styles.bottomGrid}>
          <div style={styles.mapBox}>Map</div>
          <div style={styles.installCard}>
            <span style={styles.installTitle}>New Installs</span>
            {[
              { label: "Play Store", value: "100" },
              { label: "App Store", value: "100" },
            ].map((r) => (
              <div key={r.label} style={styles.installRow}>
                <span style={{ fontWeight: 700 }}>{r.label}</span>
                <span style={styles.installValue}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.viewPrev}>
          <a href="#" style={styles.viewPrevLink}>
            View Previous Days &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}


function RidersLayout() {
  const { ridersActive } = useOutletContext();

  switch (ridersActive) {
    case "dashboard":
      return <RidersDashboard />;
    case "complaints":
      return <ComplaintsAndQueries />;
    case "cancelledRides":        
      return <CancelledRides />;
    case "completedRides":
      return <CompletedRides />;
    case "sales":
      return <SalesReport />;
    case "liveActivity":
      return <LiveAppActivity />;
    case "previousReports":
      return <PreviousReportsActivity />;
    case "rideRequestLogs":
      return <RideRequestLogs />;
    case "riderDatabase":
      return <RiderDatabase />;
    case "coupons":
        return <CouponsAndOffers />;
    case "notifications":
         return <NotificationManagement />;
    default:
      return <PlaceholderPage title={ridersActive} />;
  }
}

export default RidersLayout;