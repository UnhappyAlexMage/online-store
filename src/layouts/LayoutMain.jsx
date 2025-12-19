import Sidebar from "../components/sidebar/Sidebar.jsx";
import Promo from "../components/promo/Promo.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import { useState } from "react";
import styles from './layoutmain.module.scss';

export default function LayoutMain() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <main className={styles.main}>
            <div className={styles.blocks}>
                <Sidebar />
                <Promo 
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
            </div>
            <HomePage 
                isClicked={isClicked}
            />
        </main>
    );
}