export function Board({ children }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: "center", marginTop: "15px" }}>
      {children}
    </div>
  );
}

export function Piece({ label }) {
  return (
    <div style={{
      width: '60px',
      height: '60px',
      backgroundColor: '#eee',
      border: '2px solid #aaa',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {label}
    </div>
  );
}

