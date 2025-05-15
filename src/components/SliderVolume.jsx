import React, { useState } from 'react';

function VolumeSlider() {
  const [volume, setVolume] = useState(50);

  return (
    <div style={styles.card}>
      <h3>🔊 Volume: {volume}</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        style={styles.slider}
      />
    </div>
  );
}

const styles = {
  card: {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '300px',
    margin: '1rem auto',
    textAlign: 'center',
    background: '#f9f9f9',
  },
  slider: {
    width: '100%',
    marginTop: '1rem',
  },
};

export default VolumeSlider;