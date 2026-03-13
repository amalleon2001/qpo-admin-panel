const cardBg = '#fff';
const cardShadow = '5px 5px 10px 15px rgba(152, 152, 152, 0.06)';
function StatCard({ icon, title, value, sub, highlight, layout }) {
  const isSecondRow = layout === 'sideBySideTitle';
  return (
    <div className={`${isSecondRow ? 'col-lg-4' : 'col-lg-3'} col-md-6 col-12`}>
      <div
        className="card h-100"
        style={{
          borderRadius: 18,
          border: 'light 2px #3b3b3bff',
          background: cardBg,
          boxShadow: cardShadow,

          padding: isSecondRow ? '0px 10px' : null,
        }}
      >
        <div
          className={`card-body ${isSecondRow ? ' pt-2 pb-2' : ' ps-4 px-2 pt-2 pb-1 d-flex flex-column align-items-start justify-content-start'}`}
          style={!isSecondRow ? { gap: '2px' } : {}}
        >
          {isSecondRow ? (
            <div className="d-flex align-items-center justify-content-center gap-2 mb-4 ">
              <div style={{ fontSize: 24, color: '#1976d2' }}>{icon}</div>
              <div className="fw-bold fs-5" style={{ color: '#000' }}>
                {title}
              </div>
            </div>
          ) : (
            <>
              <div className="mb-1" style={{ fontSize: 24, color: '#1976d2' }}>
                {icon}
              </div>
              <div
                className="fw-semibold"
                style={{ fontSize: '14px', marginBottom: '2px' }}
              >
                {title}
              </div>
              <div
                className="fs-3 fw-bold mt-1"
                style={{ color: '#222', lineHeight: 1 }}
              >
                {value}
              </div>
            </>
          )}
          <div className="mt-2">
            {Array.isArray(value) &&
              isSecondRow &&
              value.map((item, index) => (
                <div key={index} className="d-flex justify-content-between">
                  <span>{item.label}</span>
                  <span>{item.data}</span>
                </div>
              ))}
          </div>
          {sub && <div className="small text-muted mt-1">{sub}</div>}
        </div>
      </div>
    </div>
  );
}
export default StatCard;
