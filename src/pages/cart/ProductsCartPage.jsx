import { useSelector } from 'react-redux';

import Sidebar from '../../components/sidebar/Sidebar.jsx';
import ProductsCart from '../../components/ProductsCart/ProductsCart.jsx';

import styles from './productscartpage.module.scss';

export default function ProductsCartPage() {
    const cartItem = useSelector(state => state.products.CartItems);
    return(
        <main className={styles.products_catalog}>
            <div className={styles.blocks_info}>
                <Sidebar />
                <ProductsCart 
                    CartItems={cartItem}
                />
            </div>
        </main>
    );
}