// MainScreen.js
import React from 'react';
import styles from '../styles/MainScreen.module.css';
import ThreeAnimation from './ThreeAnimation'; // Import your Three.js component

const MainScreen = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainTitle}>
        <h1>Hi,</h1>
        <h1>I'm Dylan,</h1>
        <h2>/*computer engineer*/</h2>
        <div className={styles.contactButton}>
          <a href="/contact" className={styles.buttonLink}>
            Contact Me
          </a>
        </div>
      </div>
      <ThreeAnimation /> {/* Include your Three.js animation component here */}
    </div>
  );
};

export default MainScreen;
