import React, { useState } from 'react';

function AddCoupon() {
  const [form, setForm] = useState({});

  return (
    <div className="px-4.5 bg-white min-h-screen font-[Segoe_UI,Arial,sans-serif]">
      <hr className='mb-3'/>

      <div className="flex items-center justify-between mb-5">
        <h2 className="poppins-title text-[22px] font-semibold text-gray-900 m-0">
          Add Coupon
        </h2>
      </div>

      <div className="bg-dashboard-bg rounded-xl p-6 mb-7">
        <div className="text-base font-bold text-gray-900 mb-5">Coupon Info</div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {[
            'Coupon Title', 'Coupon Code', 'Discount Type',
            'Discount Value', 'Max Discount', 'Discount Value',
            'Per Day Limit', 'Use Limit', 'Minimum Amount to Apply',
            'Select Date Range', 'Description',
          ].map((label, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-700 font-medium">
                {label}<span className="text-red-500">*</span>
              </label>
              <input
                className="border border-gray-300 rounded-md py-2 px-2.5 text-sm outline-none bg-white"
                value={form[label] || ''}
                onChange={(e) => setForm({ ...form, [label]: e.target.value })}
              />
            </div>
          ))}
        </div>
        <button className="block ml-auto mt-4 bg-gray-900 text-white border-none rounded-[20px] py-2 px-6 text-sm font-semibold cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddCoupon;
