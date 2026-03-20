import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { axiosDriverInstance } from '../../../services/api';
import { endpoints } from '../../../services/endpoints';

const IdleDrivers = () => {
  const [idleDriversData, setIdleDriversData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdleDrivers = async () => {
      try {
        const response = await axiosDriverInstance.get(endpoints.GET_IDLE_DRIVERS({}));
        setIdleDriversData(response.data || []);
        setTotalCount(response.totalCount || 0);
      } catch (error) {
        console.error('Error fetching idle drivers:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchIdleDrivers();
  }, []);

  return (
    <div className="p-4 pt-0 bg-white">
      <hr className='mb-3'/>
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold mb-0 nav-path">
          <span className="text-gray-500 font-bold">Live Driver Assigning &gt;</span>{' '}Idle Drivers
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
          <thead className="bg-white border-b border-gray-300">
            <tr>
              {['Driver ID', 'Driver Name', 'Phone Number', 'Vehicle No', 'Trip ID', 'Pair ID', 'Number of Riders', 'Route'].map((h) => (
                <th key={h} className="p-3 border-none">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="p-3 text-center">Loading...</td>
              </tr>
            ) : idleDriversData.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-3 text-center">No idle drivers found</td>
              </tr>
            ) : (
              idleDriversData.map((driver, index) => (
                <tr key={index}>
                  <td className="p-3 border-b border-gray-300">{driver.driverid}</td>
                  <td className="p-3 border-b border-gray-300">{driver.name}</td>
                  <td className="p-3 border-b border-gray-300">{driver.phonenumber}</td>
                  <td className="p-3 border-b border-gray-300">{driver.vehicleno}</td>
                  <td className="p-3 border-b border-gray-300">N/A</td>
                  <td className="p-3 border-b border-gray-300">N/A</td>
                  <td className="p-3 border-b border-gray-300 text-center">N/A</td>
                  <td className="p-3 border-b border-gray-300">N/A</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IdleDrivers;
