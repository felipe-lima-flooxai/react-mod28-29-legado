import React from 'react';
import styles from './RandomNumber.module.css';

function RandomNumbers() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  return (
    <div className={styles.container}>
      <div className={styles.box}>{num1}</div>
      <div className={styles.box}>{num2}</div>
    </div>
  );
}

export default RandomNumbers;