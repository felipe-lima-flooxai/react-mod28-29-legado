import React, { useState } from 'react';

function ColorSlider() {
  const [hue, setHue] = useState(180);

  const backgroundColor = `hsl(${hue}, 70%, 80%)`;

  return (
    <div style={{ ...styles.card, backgroundColor }}>
      <h3>🎨 Cor (Hue): {hue}</h3>
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(Number(e.target.value))}
        style={styles.slider}
      />
    </div>
  );
}

const styles = {
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '300px',
    margin: '1rem auto',
    textAlign: 'center',
    color: '#333',
    transition: 'background-color 0.3s ease',
  },
  slider: {
    width: '100%',
    marginTop: '1rem',
  },
};

export default ColorSlider;