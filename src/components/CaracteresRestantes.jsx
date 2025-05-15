import React, { useState } from 'react';

function CampoTextoLimitado() {
  const limite = 100;
  const [texto, setTexto] = useState('');

  const caracteresRestantes = limite - texto.length; // <- estado derivado

  return (
    <div style={styles.card}>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        maxLength={limite}
        rows={4}
        cols={30}
        style={styles.textarea}
      />
      <p>{caracteresRestantes} caracteres restantes</p>
    </div>
  );
}

const styles = {
  card: {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '1rem auto',
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
  },
  textarea: {
    width: '90%',
    padding: '0.5rem'
  },
};

export default CampoTextoLimitado;