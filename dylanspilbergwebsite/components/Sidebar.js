// Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <h2>D</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutme">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="../Contact">Contact</Link>
          </li>
          <li>
            <Link href="/myskills">Skills</Link>
          </li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        {/* Content for the main screen goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
