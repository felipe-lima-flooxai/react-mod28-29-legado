import React from 'react';

function ColorCard({ cor, children }) {
  const cores = {
    azul: '#e0f0ff',
    verde: '#e6ffed',
    rosa: '#ffe6f0'
  };

  const backgroundColor = cores[cor] || '#f0f0f0'; // fallback cinza claro

  const estilo = {
    width: '100%',
    padding: '2rem',
    backgroundColor,
    borderRadius: '12px',
    boxSizing: 'border-box',
    marginBottom: '1rem',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',       // centraliza horizontalmente
    justifyContent: 'center',   // centraliza verticalmente (se tiver altura definida)
    textAlign: 'center',        // centraliza o texto
  };

  return <div style={estilo}>{children}</div>;
}

export default ColorCard;