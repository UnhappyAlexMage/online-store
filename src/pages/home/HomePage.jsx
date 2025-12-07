import Promo from '../../components/promo/Promo.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import GetProductsSection from '../../components/products/GetProductsSection.jsx';
import styles from './homepage.module.scss';

export default function HomePage() {
    return(
        <main className={styles.main}>
            <div className={styles.blocks}>
                <Sidebar />
                <Promo />
            </div>
            <GetProductsSection />
        </main>
    );
}
