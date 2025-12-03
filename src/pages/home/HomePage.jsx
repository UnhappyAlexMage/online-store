import Promo from '../../components/promo/Promo';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './homepage.module.scss';

export default function HomePage() {
    return(
        <main className={styles.main}>
            <Sidebar />
            <Promo />
        </main>
    );
}
