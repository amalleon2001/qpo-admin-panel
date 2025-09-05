import { useState } from "react";

import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import PlaceholderPage from "./PlaceholderPage";
import LiveRideRequest from "./liveriderequest";
import NewTrip from "./newtrip";
import RefillingTrip from "./refilling-trip";
import IdleDrivers from "./idledrivers";
import OngoingDrivers from "./OngoingDrivers";
import LiveDemand from "./LiveDemand";
import RideDirection from "./livedemandtable";
import HotspotTable from "./hotspottable";
import PreviousReports from "./previousreports";
import ReportDetails from "./reportdetails";
import GeofenceTable from "./geofence";

import FullScreenStyles from "./FullScreenStyles";
import PricingAlgorithm from "./pricing-algorithm";
import DriverAlgorithm from "./Driver-algorithm";


function DashboardLayout() {
  const [active, setActive] = useState("Daily Operations");
  const showSearch = active === "Daily Operations";
  const [openMenus, setOpenMenus] = useState({});
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedDirection, setSelectedDirection] = useState(null);

  // Sidebar highlighting logic
  const sidebarActive =
    active === "ridedirection" || active === "hotspot"
      ? "liveDemand"
      : active === "reportDetails" || active === "hotspotDetails"
      ? "previousReports"
      : active;

  const getParentHeading = (activeKey) => {
    const liveActivitiesChildren = [
      "log",
      "liveRide",
      "pairing",
      "newTrip",
      "refillingTrip",
      "liveDriver",
      "idleDrivers",
      "ongoingDrivers",
    ];
    const demandChildren = [
      "demand",
      "liveDemand",
      "ridedirection",
      "previousReports",
      "reportDetails",
      "hotspot",
      "hotspotDetails",
    ];
    const algorithmChildren = [
      "algorithm",
      "pricingAlgorithm",
      "driverAlgorithm",
    ];

    if (liveActivitiesChildren.includes(activeKey))
      return "Live Activities Log";
    if (demandChildren.includes(activeKey)) return "Demand and Hotspot";
    if (algorithmChildren.includes(activeKey)) return "Algorithm";
    if (activeKey === "geofence") return "Geofence";
    if (activeKey === "Daily Operations") return "Dashboard";
    return activeKey;
  };

  const heading = getParentHeading(active);

  let content;

  switch (active) {
    case "Daily Operations":
      content = <Dashboard />;
      break;
    case "liveRide":
      content = <LiveRideRequest />;
      break;
    case "newTrip":
      content = <NewTrip />;
      break;
    case "refillingTrip":
      content = <RefillingTrip />;
      break;
    case "liveDriver":
    case "idleDrivers":
      content = <IdleDrivers />;
      break;
    case "ongoingDrivers":
      content = <OngoingDrivers />;
      break;
    case "demand":
    case "liveDemand":
      content = (
        <LiveDemand
          onViewDirection={(route) => {
            setSelectedRoute(route);
            setActive("ridedirection");
          }}
        />
      );
      break;
    case "ridedirection":
      content = (
        <RideDirection
          routeName={selectedRoute}
          onBack={() => setActive("liveDemand")}
          onViewHotspot={(direction) => {
            setSelectedDirection(direction);
            setActive("hotspot");
          }}
        />
      );
      break;
    case "hotspot":
      content = (
        <HotspotTable
          onBack={() => setActive("ridedirection")}
          data={selectedDirection}
        />
      );
      break;
    case "previousReports":
      content = (
        <PreviousReports
          onViewReport={(report) => {
            setSelectedRoute(report.route);
            setActive("reportDetails");
          }}
        />
      );
      break;
    case "reportDetails":
      content = (
        <ReportDetails
          routeName={selectedRoute}
          onBack={() => setActive("previousReports")}
          onViewHotspot={(direction) => {
            setSelectedDirection(direction);
            setActive("hotspotDetails");
          }}
        />
      );
      break;
    case "hotspotDetails":
      content = (
        <HotspotTable
          onBack={() => setActive("reportDetails")}
          data={selectedDirection}
        />
      );
      break;
    case "geofence":
      content = <GeofenceTable />;
      break;
    case "algorithm":
      content = <PlaceholderPage title={active} />;
      break;
    case "pricingAlgorithm":
      content = <PricingAlgorithm />;
      break;
    case "driverAlgorithm":
      content = <DriverAlgorithm />;
      break;
    default:
      content = <PlaceholderPage title={active} />;
  }

  return (
    <>
      <FullScreenStyles />
      <div
        className="d-flex"
        style={{
          background: "#ffffffff",
          minHeight: "100vh",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Sidebar
          active={sidebarActive}
          setActive={setActive}
          openMenus={openMenus}
          setOpenMenus={setOpenMenus}
        />
        <div
          className="flex-grow-1 d-flex flex-column"
          style={{ minWidth: 0, height: "100vh", overflow: "auto" }}
        >
          <Topbar heading={heading} showSearch={showSearch} />
          {content}
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
