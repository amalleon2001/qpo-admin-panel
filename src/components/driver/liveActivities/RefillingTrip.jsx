import React from 'react';
import { FaSearch } from 'react-icons/fa';

const RefillingTrip = () => {
  const refilling = [
    { tripId: 'T0001', pairId: 'P2313', ride1: 'R0001', ride2: 'R0007', ride3: 'R0013', seats: 3, route: 'Tidel Park to SIPCOT', driverId: 'AUTO_0001' },
    { tripId: 'T0002', pairId: 'P2314', ride1: 'R0002', ride2: 'R0008', ride3: 'R0014', seats: 3, route: 'Tidel Park to SIPCOT', driverId: 'AUTO_0001' },
    { tripId: 'T0003', pairId: 'P2315', ride1: 'R0003', ride2: 'R0009', ride3: 'R0015', seats: 3, route: 'Tidel Park to SIPCOT', driverId: 'AUTO_0001' },
    { tripId: 'T0004', pairId: 'P2316', ride1: 'R0004', ride2: 'R0010', ride3: 'R0016', seats: 3, route: 'Tidel Park to SIPCOT', driverId: 'AUTO_0001' },
    { tripId: 'T0005', pairId: 'P2317', ride1: 'R0005', ride2: 'R0011', ride3: 'R0017', seats: 3, route: 'Tidel Park to SIPCOT', driverId: 'AUTO_0001' },
    { tripId: 'T0006', pairId: 'P2318', ride1: 'R0006', ride2: 'R0012', ride3: 'R0018', seats: 3, route: 'Tidel Park to SIPCOT', driverId: 'AUTO_0001' },
  ];

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className='mb-3'/>
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold mb-0 nav-path">
          <span className="text-gray-500 font-bold">Live Pairing &gt;</span>{' '}Refilling Trip
        </h4>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">Total Count : 1150</div>
      </div>

      <div className="flex items-center justify-start gap-4 mb-3 flex-wrap gap-y-2.5">
        <div className="relative flex-[1_1_250px] max-w-[1000px]">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white" placeholder="Search" />
        </div>
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-[150px]"><option>All Status</option></select>
        <select className="border border-gray-300 rounded-[10px] py-2 px-3 outline-none bg-white max-w-[150px]"><option>This Month</option></select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-0 border border-gray-300 rounded-lg border-separate border-spacing-0 overflow-hidden">
          <thead className="bg-white border-b border-gray-300">
            <tr>
              {['Ongoing Trip ID', 'Pair ID', 'Ride ID 1', 'Ride ID 2', 'Ride ID 3', 'Seats Combined', 'Route', 'Driver ID'].map((h) => (
                <th key={h} className="p-3 border-none">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {refilling.map((trip, index) => (
              <tr key={index}>
                <td className="p-3 border-b border-gray-300 text-center">{trip.tripId}</td>
                <td className="p-3 border-b border-gray-300">{trip.pairId}</td>
                <td className="p-3 border-b border-gray-300">{trip.ride1}</td>
                <td className="p-3 border-b border-gray-300">{trip.ride2}</td>
                <td className="p-3 border-b border-gray-300">{trip.ride3}</td>
                <td className="p-2.5 border-b border-gray-300 text-center">{trip.seats}</td>
                <td className="p-3 border-b border-gray-300">{trip.route}</td>
                <td className="p-3 border-b border-gray-300">{trip.driverId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefillingTrip;
