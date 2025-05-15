import React, { Component } from 'react';

class ContadorDeMiados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miados: 0
    };
  }

  miar = () => {
    this.setState((prevState) => ({
      miados: prevState.miados + 1
    }));
  };

  render() {
    return (
      <div style={styles.card}>
        <h2>😺 Contador de Miados</h2>
        <p>Total de miados: <strong>{this.state.miados}</strong></p>
        <button onClick={this.miar} style={styles.button}>Miar!</button>
      </div>
    );
  }
}

const styles = {
  card: {
    padding: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '300px',
    margin: '1rem auto',
    backgroundColor: '#fff8f0',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    backgroundColor: '#ff99cc',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default ContadorDeMiados;