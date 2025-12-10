
import Promo from '../../components/promo/Promo.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import GetProductsSection from '../../components/products/GetProductsSection.jsx';
import PromoBanner from '../../components/promoBanner/PromoBanner.jsx';
import RecommendedProducts from '../../components/products/FeaturedProducts/RecommendedProducts.jsx';
import GetProductsLessThan from '../../components/products/ProductsLessThan/GetProductsLessThan.jsx';

import styles from './homepage.module.scss';

export default function HomePage() {
    return(
        <main className={styles.main}>
            <div className={styles.blocks}>
                <Sidebar />
                <Promo />
            </div>
            <GetProductsSection />
            <RecommendedProducts />
            <PromoBanner />
            <GetProductsLessThan />
        </main>
    );
}
