export const endpoints = {
  LOG_IN: '/login',
  GET_ALL_ADMIN_PANEL_DATA: '/getAllAdminPanelData',
  GET_ON_GOING_RIDES: '/getOnGoingRides',
  GET_TRIPS_SUMMARY_TABLE: (params) =>
    `/getTripsSummaryTable?${new URLSearchParams(params).toString()}`,
  GET_LIVE_RIDE_REQUESTS: (params) =>
    `/getLiveRideRequests?${new URLSearchParams(params).toString()}`,
};
