import Sidebar from "../components/sidebar/Sidebar.jsx";
import Promo from "../components/promo/Promo.jsx";
import HomePage from "../pages/home/HomePage.jsx";

import styles from './layoutmain.module.scss';

export default function LayoutMain() {
    return (
        <main className={styles.main}>
            <div className={styles.blocks}>
                <Sidebar />
                <Promo />
            </div>
            <HomePage />
        </main>
    );
}