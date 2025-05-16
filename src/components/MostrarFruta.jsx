import React, { useState } from 'react';
import EscolhedorDeFruta from './EscolhedorFruta';

function FrutaFavorita() {
  const [fruta, setFruta] = useState(null);

  function receberFruta(frutaEscolhida) {
    setFruta(frutaEscolhida);
  }

  return (
    <div style={styles.card}>
      <h2>🍉 Comunicação Indireta</h2>
      <EscolhedorDeFruta aoEscolher={receberFruta} />
      {fruta && <p>Sua fruta favorita é: <strong>{fruta}</strong></p>}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#fdfdfd',
    maxWidth: '400px',
    margin: '2rem auto'
  }
};

export default FrutaFavorita;
