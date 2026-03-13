import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import Sendonebyone from '../assets/send-one-by-one.png';
import Sendtomany from '../assets/send-to-all.png';

const DriverAlgorithm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [assignmentMethod, setAssignmentMethod] = useState('sendToAll');
  const [assignmentTime, setAssignmentTime] = useState(30);
  const handleSave = () => console.log('Saving driver algorithm settings:', { assignmentMethod, assignmentTime });

  return (
    <div className="p-4 pt-2 bg-[#f8f9fa] min-h-screen">
      <hr />
      <div className="mb-4">
        <h2 className="font-bold mb-0 text-gray-700 text-2xl">Driver Algorithm</h2>
      </div>

      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="relative flex-1 max-w-[800px]">
          <FaSearch className="absolute top-3 left-3 text-gray-400" size={16} />
          <input type="text" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-[10px] outline-none bg-white text-sm" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <button className="flex items-center gap-2 border border-gray-400 text-gray-600 hover:bg-gray-100 cursor-pointer bg-white rounded-lg text-sm font-medium py-2 px-4">
          <FaPlus size={16} /> Add
        </button>
      </div>

      <div className="w-full bg-[#fafbfe] rounded-[28px] py-10 px-8.5 flex flex-col items-start">
        <div className="flex gap-9.5 w-full mb-7.5">
          <div className="flex flex-col items-center cursor-pointer">
            <div className="w-[260px] h-[219px] rounded-2xl flex items-center justify-center" onClick={() => setAssignmentMethod('sendToAll')}>
              <img src={Sendtomany} alt="Send to All Algorithm" className="w-[94%] h-[90%] object-contain" />
            </div>
            <div className="flex items-center mt-2.5 text-base">
              <span className="mr-1.5 text-black font-medium">Send to All</span>
              <span
                onClick={() => setAssignmentMethod('sendToAll')}
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full border-[2.2px] border-gray-800 ml-2 cursor-pointer ${assignmentMethod === 'sendToAll' ? 'bg-gray-900' : 'bg-white'}`}
              >
                {assignmentMethod === 'sendToAll' && <span className="text-white text-xl font-bold leading-none -mt-px">✔</span>}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <div className="w-[260px] h-[219px] rounded-2xl flex items-center justify-center" onClick={() => setAssignmentMethod('sendOneByOne')}>
              <img src={Sendonebyone} alt="Send One by One Algorithm" className="w-[94%] h-[90%] object-contain" />
            </div>
            <div className="flex items-center mt-2.5 text-base">
              <span className="mr-1.5 text-gray-800 font-medium">Send one by one</span>
              <span
                onClick={() => setAssignmentMethod('sendOneByOne')}
                className={`inline-flex items-center justify-center w-4.5 h-4.5 rounded-full border-[2.2px] border-gray-800 ml-2 cursor-pointer ${assignmentMethod === 'sendOneByOne' ? 'bg-gray-900' : 'bg-white'}`}
              >
                {assignmentMethod === 'sendOneByOne' && <span className="text-white text-xl font-bold leading-none -mt-px">✔</span>}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4 w-full mt-6">
          <label className="block font-extrabold mb-2 text-xl text-black">Assignment Time (in Seconds)</label>
          <input type="number" className="w-full py-2 px-4 border border-gray-300 rounded-lg outline-none bg-white max-w-[350px] text-base" value={assignmentTime} onChange={(e) => setAssignmentTime(Number(e.target.value))} />
        </div>

        <button className="bg-gray-900 text-white hover:bg-gray-800 cursor-pointer border-none rounded-lg text-base font-medium py-2.5 px-6 mt-1" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default DriverAlgorithm;
