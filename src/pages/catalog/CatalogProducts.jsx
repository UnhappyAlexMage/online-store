import Sidebar from '../../components/sidebar/Sidebar.jsx';
import ProductModel from '../../components/ProductModal/ProductModal.jsx';
import styles from './catalogproducts.module.scss';

export default function CatalogProducts() {
    return(
        <main className={styles.main}>
            <div className={styles.blocks}>
                <Sidebar />
                <ProductModel />
            </div>
            {/* <GetProductsSection /> */}
        </main>
    );
}