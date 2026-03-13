const cardBg = '#fff';
const cardShadow = '5px 5px 10px 15px rgba(152, 152, 152, 0.06)';

function StatCard({ icon, title, value, sub, highlight, layout }) {
  const isSecondRow = layout === 'sideBySideTitle';
  return (
    <div className={`col-span-12 ${isSecondRow ? 'lg:col-span-4' : 'lg:col-span-3'} md:col-span-6`}>
      <div className="h-full rounded-2xl" style={{ border: 'light 2px #3b3b3b', background: cardBg, boxShadow: cardShadow, padding: isSecondRow ? '0px 10px' : undefined }}>
        <div className={`p-4 ${isSecondRow ? 'pt-2 pb-2' : 'pl-4 px-2 pt-2 pb-1 flex flex-col items-start justify-start'}`} style={!isSecondRow ? { gap: '2px' } : {}}>
          {isSecondRow ? (
            <div className="flex items-center justify-center gap-2 mb-4">
              <div style={{ fontSize: 24, color: '#1976d2' }}>{icon}</div>
              <div className="font-bold text-xl" style={{ color: '#000' }}>{title}</div>
            </div>
          ) : (
            <>
              <div className="mb-1" style={{ fontSize: 24, color: '#1976d2' }}>{icon}</div>
              <div className="font-semibold" style={{ fontSize: '14px', marginBottom: '2px' }}>{title}</div>
              <div className="text-3xl font-bold mt-1" style={{ color: '#222', lineHeight: 1 }}>{value}</div>
            </>
          )}
          <div className="mt-2">
            {Array.isArray(value) && isSecondRow && value.map((item, index) => (
              <div key={index} className="flex justify-between"><span>{item.label}</span><span>{item.data}</span></div>
            ))}
          </div>
          {sub && <div className="text-sm text-gray-500 mt-1">{sub}</div>}
        </div>
      </div>
    </div>
  );
}
export default StatCard;
