import React from 'react';

function DateRangePicker({ fromDate, toDate, onFromChange, onToChange }) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="flex items-center gap-2" style={{ position: 'relative', zIndex: 10 }}>
      <div className="flex items-center gap-1.5">
        <label className="text-sm text-gray-600 font-medium whitespace-nowrap">From</label>
        <input
          type="date"
          className="border-[1.5px] border-gray-300 rounded-lg py-1.5 px-3 text-sm text-gray-700 cursor-pointer outline-none"
          style={{ backgroundColor: '#fff', colorScheme: 'light' }}
          value={fromDate}
          max={toDate || today}
          onChange={(e) => onFromChange(e.target.value)}
          onClick={(e) => e.target.showPicker()}
        />
      </div>
      <div className="flex items-center gap-1.5">
        <label className="text-sm text-gray-600 font-medium whitespace-nowrap">To</label>
        <input
          type="date"
          className="border-[1.5px] border-gray-300 rounded-lg py-1.5 px-3 text-sm text-gray-700 cursor-pointer outline-none"
          style={{ backgroundColor: '#fff', colorScheme: 'light' }}
          value={toDate}
          min={fromDate}
          max={today}
          onChange={(e) => onToChange(e.target.value)}
          onClick={(e) => e.target.showPicker()}
        />
      </div>
    </div>
  );
}

export default DateRangePicker;
