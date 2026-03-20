function PlaceholderPage({ title }) {
  return (
    <div className="p-4" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <div className="grid grid-cols-12 gap-4 mb-3">
        <div className="col-span-12">
          <div className="h-full border-none rounded-2xl bg-white" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)', minHeight: 200 }}>
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="font-bold" style={{ color: '#1976d2' }}>{title}</h3>
              <p className="text-gray-500">This is a placeholder for the {title} page. The layout and card sizes remain consistent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;
