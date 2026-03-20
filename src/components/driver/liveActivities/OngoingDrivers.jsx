import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { axiosDriverInstance } from '../../../services/api';
import { endpoints } from '../../../services/endpoints';

const OngoingDrivers = () => {
  const [ongoingDriversData, setOngoingDriversData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOngoingDrivers = async () => {
      try {
        const response = await axiosDriverInstance.get(endpoints.GET_ONGOING_DRIVERS_WITH_TRIPS({}));
        setOngoingDriversData(response.data || []);
        setTotalCount(response.totalCount || 0);
      } catch (error) {
        console.error('Error fetching ongoing drivers:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOngoingDrivers();
  }, []);

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className='mb-3'/>
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold mb-0 nav-path">
          <span className="text-gray-500 font-bold">Live Driver Assigning &gt;</span>{' '}Ongoing Drivers (Refilling)
        </h4>
        <div className="font-bold text-xl border border-gray-300 px-3 py-2 rounded-lg">Total Count : {totalCount}</div>
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
          <thead className="bg-[#f8f9fa] border-b border-gray-300">
            <tr>
              {['Ongoing Trip ID', 'Pair ID', 'Number of Riders', 'Driver ID', 'Driver Name', 'Route', 'Attempt'].map((h) => (
                <th key={h} className="p-3 border-none text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="p-3 text-center">Loading...</td>
              </tr>
            ) : ongoingDriversData.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-3 text-center">No ongoing drivers found</td>
              </tr>
            ) : (
              ongoingDriversData.map((driver, index) => (
                <tr key={index}>
                  <td className="p-3 border-b border-gray-300">{driver.ongoingTripId}</td>
                  <td className="p-3 border-b border-gray-300">{driver.pairId ?? 'N/A'}</td>
                  <td className="p-3 border-b border-gray-300 text-center">{driver.numberOfRiders}</td>
                  <td className="p-3 border-b border-gray-300">{driver.driverId}</td>
                  <td className="p-3 border-b border-gray-300">{driver.driverName}</td>
                  <td className="p-3 border-b border-gray-300">{driver.route ?? 'N/A'}</td>
                  <td className="p-3 border-b border-gray-300 text-center">{driver.attempt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OngoingDrivers;
