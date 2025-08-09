import React from 'react';
import liveDemandIcon from '../assets/paid.png';
import tick from '../assets/tick.png';
import wrong from '../assets/wrong.png';
import auto from '../assets/auto.png';
import driver from '../assets/vector.png';
import alarmon from '../assets/alarm_on.png';
import liveDriverIcon from '../assets/f7_person-3-fill.png';


const cardBg = '#fff';
const cardShadow = '5px 5px 10px 15px rgba(152, 152, 152, 0.06)';
const dashboardBg = '#F9FAFF';


function StatCard({ icon, title, value, sub, highlight, layout }) {
  const isSecondRow = layout === 'sideBySideTitle';
  return (
    <div className={`${isSecondRow ? 'col-lg-4' : 'col-lg-3'} col-md-6 col-12`}>
      <div className="card h-100" style={{

        borderRadius: 18,
        border: 'light 2px #3b3b3bff',
        background: cardBg,
        boxShadow: cardShadow,
       
        padding: isSecondRow ? '0px 10px' : null
      }}>
        <div className={`card-body ${isSecondRow ? ' pt-2 pb-2' : ' ps-4 px-2 pt-2 pb-1 d-flex flex-column align-items-start justify-content-start'}`} style={!isSecondRow ? { gap: '2px' } : {}}>
          {isSecondRow ? (
            <div className="d-flex align-items-center justify-content-center gap-2 mb-4 ">
              <div style={{ fontSize: 24, color: '#1976d2' }}>{icon}</div>
              <div className="fw-bold fs-5" style={{ color: '#000' }}>{title}</div>
            </div>
          ) : (
            <>
              <div className="mb-1" style={{ fontSize: 24, color: '#1976d2' }}>{icon}</div>
              <div className="fw-semibold" style={{ fontSize: '14px', marginBottom: '2px' }}>{title}</div>
              <div className="fs-3 fw-bold mt-1" style={{ color: '#222', lineHeight: 1 }}>{value}</div>
            </>
          )}
          <div className="mt-2">
            {Array.isArray(value) && isSecondRow && value.map((item, index) => (
              <div key={index} className="d-flex justify-content-between"><span>{item.label}</span><span>{item.data}</span></div>
            ))}
          </div>
          {sub && <div className="small text-muted mt-1">{sub}</div>}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-4 m-0">
      <div style={{ background: dashboardBg, borderRadius: 50 }}>
        {/* First Row */}
        <div className="row px-4 pt-4">
          <StatCard icon={<img src={liveDemandIcon} alt="Revenue" style={{ width: 50, height: 50 }} />} title="Revenue Today" value="₹13000" highlight />
          <StatCard icon={<img src={tick} alt="Completed Rides" style={{ width: 50, height: 50 }} />} title="Completed Rides" value="1000" />
          <StatCard icon={<img src={wrong} alt="Cancelled Rides" style={{ width: 50, height: 50 }} />} title="Cancelled Rides" value="20" />
          <StatCard icon={<img src={auto} alt="Ongoing Rides" style={{ width: 50, height: 50 }} />} title="Ongoing Rides" value="30" />
        </div>

        {/* Second Row */}
        <div className="row g-5 px-4 pt-4 pb-4">
          <StatCard layout="sideBySideTitle" icon={<img src={liveDriverIcon} alt="Riders" style={{ width: 33, height: 33 }} />} title="Riders" highlight value={[{ label: 'Active users', data: '100' }, { label: 'Ride Request', data: '100' }]} />
          <StatCard layout="sideBySideTitle" icon={<img src={driver} alt="Drivers" style={{ width: 23, height: 27 }} />} title="Drivers" value={[{ label: 'Online now', data: '90' }, { label: 'Present Today', data: '100' }]} />
          <StatCard layout="sideBySideTitle" icon={<img src={alarmon} alt="Average Time" style={{ width: 24, height: 24 }} />} title="Average Time" value={[{ label: 'Pairing Riders', data: '2 mins' }, { label: 'Assigning Drivers', data: '2 mins' }]} />
        </div>

   

      </div>


<div style={{ background: dashboardBg, borderRadius: 50 }}>

           {/* Map + Today Summary */}
        <div className="row g-4 px-4 mt-3">
          <div className="col-lg-5">
            
              <div className="card-body">
                <h5 className="fw-bold fs-4 mb-3" style={{ color: '#222' }}>QPo Hotspot Map View</h5>
                <div className=" d-flex align-items-center justify-content-center" style={{ height: 220, borderRadius: 18, fontSize: 40, color: '#D9D9D9', background: '#e0e0e0' }}>
                 <p className="fw-bold" style={{color: '#000000', fontSize:'48'}}>Map</p>
                </div>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-50 mt-5 ms-5" style={{ borderRadius: 18, background: cardBg, boxShadow: cardShadow }}>
              <div className="card-body">
                <h5 className="fw-semibold mb-4 d-flex justify-content-center  " style={{ color: '#222' }}>Overall Today</h5>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between"><span>Ride Request</span><span>100</span></div>
                  <div className="d-flex justify-content-between"><span>Rider Signup</span><span>100</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Previous Days */}
        <div className="text-end px-5 py-3">
          <a href="#" className="text-decoration-underline fw-medium" style={{ color: '#363636' }}>
            View Previous Days &raquo;
          </a>
        </div>

</div>




    </div>
  );
}

export default Dashboard;
