import React, { useState } from 'react';

function GreetingCard({ name }) {
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <div style={styles.card}>
      <button
        onClick={() => setShowGreeting(!showGreeting)}
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        {showGreeting ? 'Esconder saudação' : 'Mostrar saudação'}
      </button>

      {showGreeting && (
        <div style={styles.greeting}>
          <h1>Olá, {name}!</h1>
          <p>Seja bem-vindo ao nosso site.</p>
          <p>Esta é a ultima sessão do curso de react. 
          </p>
          <p>Simplesmente uma sessão de treinar conceitos básicos
            de componente react</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  greeting: {
    marginTop: '1rem',
  },
};

export default GreetingCard;