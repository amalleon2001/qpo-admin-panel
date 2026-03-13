export const endpoints = {
  LOG_IN: '/login',
  GET_ALL_ADMIN_PANEL_DATA: '/getAllAdminPanelData',
  GET_ON_GOING_RIDES: '/getOnGoingRides',
  GET_TRIPS_SUMMARY_TABLE: (params) =>
    `/getTripsSummaryTable?${new URLSearchParams(params).toString()}`,
  GET_LIVE_RIDE_REQUESTS: (params) =>
    `/getLiveRideRequests?${new URLSearchParams(params).toString()}`,
  GET_DRIVER_ADMIN_PANEL_DATA: '/getAllAdminPanelData',
  GET_RIDER_DASHBOARD_STATS: '/getRiderDashboardStats',
  GET_CANCELLED_RIDES: '/getCancelledRides',
  GET_IDLE_DRIVERS: '/getIdleDrivers',
  GET_ONGOING_DRIVERS_WITH_TRIPS: '/getOngoingDriversWithTrips',
  GET_COMPLETED_RIDES: '/getCompletedRides',
};
