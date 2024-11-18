export function ZelijPattern() {
  return (
    <div className="w-full h-8 flex overflow-hidden opacity-20">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-16 h-16 rotate-45 transform -translate-y-8" 
             style={{backgroundColor: i % 2 === 0 ? '#9575CD' : '#B71C1C'}} />
      ))}
    </div>
  );
}
