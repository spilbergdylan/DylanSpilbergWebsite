import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';
import MainScreen from '../components/MainScreen';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
          <Sidebar />

    <MainScreen />
    <Footer />
     
    </div>
  );
}
