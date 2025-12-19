import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/fetchApiThunk.js';

import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Promo from '../../components/promo/Promo.jsx';
import ProductsCatalog from '../../components/ProductsCatalog/ProductsCatalog.jsx';
import ProductInfo from '../../components/ProductInfo/ProductInfo.jsx';

import styles from './productspage.module.scss';

export default function ProductsPage() {
    let dataSection = {
        title: "Related products"
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const INITIAL_LIMIT = 15;
    const [itemsToShow, setItemsToShow] = useState(INITIAL_LIMIT);
    const productsAll = useSelector(state => state.products.ProductsAll) || [];
    const productsAllLimited = productsAll.slice(0, itemsToShow);
   
    const handleShowAllClick = () => {
        setItemsToShow(productsAll.length);
    };

    const handleHideAllClick = () => {
        setItemsToShow(INITIAL_LIMIT);
    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleProductClick = () => {
        setIsModalOpen(true);
    };


    const getSelectedProduct = useSelector(state => state.products.selectedProduct) || [];
    const cartItems = useSelector(state => state.products.CartItems) || [];
    const isItemInCart = getSelectedProduct && cartItems.some(item => item.id === getSelectedProduct.id);
    
    return (
        <main className={styles.products_catalog}>
            <div className={styles.blocks_info}>
                <Sidebar />
                {isModalOpen ? (
                    <ProductInfo 
                        selectedProduct={getSelectedProduct}
                        isSubmitting={isItemInCart}
                    />
                ) : (
                    <Promo />
                )}
            </div>
            <ProductsCatalog 
                title={dataSection.title}
                allProducts={productsAllLimited}
                onClickShowAll={handleShowAllClick}
                onClickHideAll={handleHideAllClick}
                onProductClick={handleProductClick}
            />
        </main>
    );
}