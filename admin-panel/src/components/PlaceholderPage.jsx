const dashboardBg = '#f8f9fa'; // or import from a constants file
const cardBg = '#fff';
const cardShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';

function PlaceholderPage({ title }) {
  return (
    <div className="p-4" style={{ background: dashboardBg, minHeight: '100vh' }}>
      <div className="row g-4 mb-3">
        <div className="col-12">
          <div className="card h-100 border-0" style={{ borderRadius: 18, background: cardBg, boxShadow: cardShadow, minHeight: 200 }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h3 className="fw-bold" style={{ color: '#1976d2' }}>{title}</h3>
              <p className="text-muted">This is a placeholder for the {title} page. The layout and card sizes remain consistent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;
