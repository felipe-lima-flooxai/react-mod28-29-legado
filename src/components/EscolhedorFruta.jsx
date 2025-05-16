import React from 'react';

function EscolhedorDeFruta({ aoEscolher }) {
  const frutas = ['🍎 Maçã', '🍌 Banana', '🍇 Uva'];

  return (
    <div>
      <h3>Escolha uma fruta:</h3>
      {frutas.map((fruta, i) => (
        <button key={i} onClick={() => aoEscolher(fruta)} style={styles.button}>
          {fruta}
        </button>
      ))}
    </div>
  );
}

const styles = {
  button: {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default EscolhedorDeFruta;