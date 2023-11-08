import React from 'react';
import styles from '../styles/contact.module.css'; // Import your CSS styles
import Sidebar from '../components/Sidebar';
export default function Contact() {
    return (
        <div className={styles.mainContent}>
                    <Sidebar/>
                    <h1 className={styles.title}>Contact Me!</h1>


        <div className={styles.contactGrid}>


            <div className={styles.contactItem}>
                <img src='/mail.jpeg' alt="Mail Logo" className={styles.logo} />
                <p>Email: spilbergdylan@gmail.com</p>
            </div>


            <div className={styles.contactItem}>
                <img src='/iphone.png' alt="iPhone Logo" className={styles.logo} />
                <p>Phone: (647) 620-9273</p>
            </div>



            <div className={styles.contactItem}>
                <a href="https://www.linkedin.com/in/dylanspilberg/" target="_blank">
                    <img src="/linkedin.png" alt="LinkedIn Logo" className={styles.logo} />
                    <p>www.linkedin.com/in/dylanspilberg/</p>
                </a>
            </div>





        </div>
        </div>
    );
}
