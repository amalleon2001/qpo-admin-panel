export const endpoints = {
  LOG_IN: '/login',
  GET_ALL_ADMIN_PANEL_DATA: (params) =>
    `/getAllAdminPanelData?${new URLSearchParams(params).toString()}`,
  GET_ON_GOING_RIDES: (params) =>
    `/getOnGoingRides?${new URLSearchParams(params).toString()}`,
  GET_TRIPS_SUMMARY_TABLE: (params) =>
    `/getTripsSummaryTable?${new URLSearchParams(params).toString()}`,
  GET_LIVE_RIDE_REQUESTS: (params) =>
    `/getLiveRideRequests?${new URLSearchParams(params).toString()}`,
  GET_DRIVER_ADMIN_PANEL_DATA: (params) =>
    `/getAllAdminPanelData?${new URLSearchParams(params).toString()}`,
  GET_RIDER_DASHBOARD_STATS: (params) =>
    `/getRiderDashboardStats?${new URLSearchParams(params).toString()}`,
  GET_CANCELLED_RIDES: (params) =>
    `/getCancelledRides?${new URLSearchParams(params).toString()}`,
  GET_IDLE_DRIVERS: (params) =>
    `/getIdleDrivers?${new URLSearchParams(params).toString()}`,
  GET_ONGOING_DRIVERS_WITH_TRIPS: (params) =>
    `/getOngoingDriversWithTrips?${new URLSearchParams(params).toString()}`,
  GET_COMPLETED_RIDES: (params) =>
    `/getCompletedRides?${new URLSearchParams(params).toString()}`,
  GET_NOTIFICATIONS: (params) =>
    `/getNotifications?${new URLSearchParams(params).toString()}`,
  SCHEDULE_NOTIFICATION: '/scheduleNotification/create',
  SCHEDULE_NOTIFICATION_MULTIPLE: '/scheduleNotification/createMultiple',
  UPDATE_SCHEDULED_NOTIFICATION: '/scheduleNotification/update',
  DELETE_SCHEDULED_NOTIFICATION: '/scheduleNotification/delete',
};
