import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import SearchIcon from '../../common/SearchIcon';
import DateRangePicker from '../../common/DateRangePicker';
import { axiosRiderInstance } from '../../../services/api';
import { endpoints } from '../../../services/endpoints';

import EditIcon from '../../common/EditIcon';
import TrashIcon from '../../common/TrashIcon';

function NotificationHistory() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
  const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1, totalItems: 0, hasNext: false });

  const fetchNotifications = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const startDate = new Date(fromDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(toDate);
      endDate.setHours(23, 59, 59, 999);
      const params = { page, status, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
      const response = await axiosRiderInstance.get(endpoints.GET_NOTIFICATIONS(params));
      console.log("responser", response);
      setNotifications(response.notifications || []);
      if (response.pagination) setPagination(response.pagination);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  }, [status, fromDate, toDate]);

  useEffect(() => {
    fetchNotifications(1);
  }, [fetchNotifications]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const response = await axiosRiderInstance.delete(endpoints.DELETE_SCHEDULED_NOTIFICATION, {
        data: { notificationId: deleteId },
      });
      console.log("response", response);
      
      setDeleteId(null);
      fetchNotifications();
    } catch (error) {
      console.error('Failed to delete notification:', error);
      toast.error('Failed to delete notification');
    } finally {
      setDeleting(false);
    }
  };

  const filteredNotifications = notifications.filter((n) => {
    const matchesSearch =
      !search ||
      n.title?.toLowerCase().includes(search.toLowerCase()) ||
      n.body?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'all' || n.status?.toLowerCase() === status.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr className='mb-3'/>

      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">
          Notification History
        </h2>
        <span className="text-[22px] font-semibold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Total Count : {pagination.totalItems}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <DateRangePicker
          fromDate={fromDate}
          toDate={toDate}
          onFromChange={setFromDate}
          onToChange={setToDate}
        />
        <div className="flex items-center bg-white border-[1.5px] border-gray-300 rounded-3xl py-1.75 px-4 flex-1 gap-2">
          <SearchIcon />
          <input
            className="border-none outline-none text-sm text-gray-700 w-full bg-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border-[1.5px] border-gray-300 rounded-lg py-1.75 pr-8 pl-3.5 text-sm text-gray-700 bg-white cursor-pointer appearance-none outline-none min-w-[120px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23555%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_10px_center]"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="scheduled">Scheduled</option>
          <option value="cancelled">Cancelled</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <div className="border-[1.5px] border-gray-300 rounded overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Created On', 'Title', 'Tag', 'Message Body', 'Status', 'Action'].map((h) => (
                <th key={h} className="bg-[#f0f0f0] text-gray-700 font-semibold text-sm py-3 px-4.5 text-left border-b-[1.5px] border-gray-300">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center text-sm text-gray-500 py-8">Loading...</td>
              </tr>
            ) : filteredNotifications.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-sm text-gray-500 py-8">
                  {fromDate === toDate
                    ? `No items to show on ${new Date(fromDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
                    : `Nothing to show from ${new Date(fromDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} - ${new Date(toDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
                  }
                </td>
              </tr>
            ) : (
              filteredNotifications.map((row) => (
                <tr key={row.notificationId} className="bg-white">
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{formatDate(row.scheduleTime)}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.title}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.notificationId}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.body}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">{row.status}</td>
                  <td className="text-sm text-gray-700 py-3.25 px-4.5 text-left border-b border-[#f0f0f0]">
                    <div className="flex items-center gap-2.5">
                      <button className="bg-transparent border-none cursor-pointer p-0"><EditIcon /></button>
                      <button className="bg-transparent border-none cursor-pointer p-0" onClick={() => setDeleteId(row.notificationId)}><TrashIcon /></button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            className="px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-lg bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => fetchNotifications(pagination.currentPage - 1)}
            disabled={pagination.currentPage <= 1 || loading}
          >
            Previous
          </button>
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg border cursor-pointer ${
                page === pagination.currentPage
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
              onClick={() => fetchNotifications(page)}
              disabled={loading}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-lg bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => fetchNotifications(pagination.currentPage + 1)}
            disabled={!pagination.hasNext || loading}
          >
            Next
          </button>
        </div>
      )}

      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg min-w-[350px]">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Notification</h3>
            <p className="text-sm text-gray-600 mb-6">Are you sure you want to delete this notification? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg cursor-pointer border-none hover:bg-gray-200"
                onClick={() => setDeleteId(null)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg cursor-pointer border-none hover:bg-red-700 disabled:opacity-60"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'OK'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationHistory;
