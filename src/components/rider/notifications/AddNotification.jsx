import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosRiderInstance } from '../../../services/api';
import { endpoints } from '../../../services/endpoints';

const today = () => new Date().toISOString().split('T')[0];
const now = () => new Date().toTimeString().slice(0, 5);

const createEmptyRow = () => ({ title: '', body: '', scheduleDate: today(), scheduleTime: now() });

const formatScheduleTime = (scheduleDate, scheduleTime) => {
  if (!scheduleDate || !scheduleTime) return '';
  const dateObj = new Date(`${scheduleDate}T${scheduleTime}`);
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = dateObj.toLocaleString('en-US', { month: 'short' });
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${day}-${month}-${year} ${hours}:${minutes}${ampm}`;
};

function AddNotification() {
  const [notifications, setNotifications] = useState([createEmptyRow()]);
  const [sending, setSending] = useState(false);

  const updateRow = (index, field, value) => {
    setNotifications((prev) => prev.map((row, i) => (i === index ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    setNotifications((prev) => [...prev, createEmptyRow()]);
  };

  const removeRow = (index) => {
    if (notifications.length <= 1) return;
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    const invalid = notifications.some((n) => !n.title || !n.body || !n.scheduleDate || !n.scheduleTime);
    if (invalid) {
      toast.warn('Please fill all fields in every notification');
      return;
    }

    setSending(true);
    try {
      if (notifications.length === 1) {
        const n = notifications[0];
        await axiosRiderInstance.post(endpoints.SCHEDULE_NOTIFICATION, {
          title: n.title,
          body: n.body,
          scheduleTime: formatScheduleTime(n.scheduleDate, n.scheduleTime),
        });
      } else {
        const payload = notifications.map((n) => ({
          title: n.title,
          body: n.body,
          scheduleTime: formatScheduleTime(n.scheduleDate, n.scheduleTime),
        }));
        await axiosRiderInstance.post(endpoints.SCHEDULE_NOTIFICATION_MULTIPLE, { notifications: payload });
      }
      setNotifications([createEmptyRow()]);
      toast.success(notifications.length === 1 ? 'Notification scheduled successfully' : `${notifications.length} notifications scheduled successfully`);
    } catch (error) {
      console.error('Failed to send notification:', error);
      toast.error('Failed to send notification');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr className='mb-3'/>
      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">
          Add Notification
        </h2>
        <span className="text-[22px] font-semibold text-gray-900 border-[1.5px] border-gray-800 rounded-[10px] py-1.5 px-5">
          Count : {notifications.length}
        </span>
      </div>

      {notifications.map((row, index) => (
        <div key={index} className="bg-dashboard-bg rounded-xl p-6 mb-4 relative">
          {notifications.length > 1 && (
            <button
              className="absolute top-3 right-3 bg-transparent border-none cursor-pointer text-gray-400 hover:text-red-500 text-lg font-bold"
              onClick={() => removeRow(index)}
              title="Remove"
            >
              &times;
            </button>
          )}
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-gray-700 font-medium">Notification Title</label>
                <input
                  className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white w-3/5"
                  value={row.title}
                  onChange={(e) => updateRow(index, 'title', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-gray-700 font-medium">Notification Body</label>
                <input
                  className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white w-3/5"
                  value={row.body}
                  onChange={(e) => updateRow(index, 'body', e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-gray-700 font-medium">Schedule Date</label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white w-4/5 cursor-pointer"
                    value={row.scheduleDate}
                    min={today()}
                    onChange={(e) => updateRow(index, 'scheduleDate', e.target.value)}
                    onClick={(e) => e.target.showPicker()}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-gray-700 font-medium">Schedule Time</label>
                  <input
                    type="time"
                    className="border border-gray-300 rounded-md py-1.25 px-2 text-[13px] outline-none bg-white w-4/5 cursor-pointer"
                    value={row.scheduleTime}
                    min={row.scheduleDate === today() ? now() : undefined}
                    onChange={(e) => updateRow(index, 'scheduleTime', e.target.value)}
                    onClick={(e) => e.target.showPicker()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 mb-5">
        <button
          className="flex items-center gap-1 border-[1.5px] border-gray-300 rounded-lg py-1.75 px-3.5 text-sm text-gray-700 bg-white cursor-pointer font-medium"
          onClick={addRow}
        >
          + Add More
        </button>
        <button className="send-btn" onClick={handleSend} disabled={sending}>
          {sending ? 'Sending...' : notifications.length === 1 ? 'Send Notification' : `Send ${notifications.length} Notifications`}
        </button>
      </div>
    </div>
  );
}

export default AddNotification;
