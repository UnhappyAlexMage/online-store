import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsCartItem from './ProductsCartItem.jsx';

import styles from './productscart.module.scss';

export default function ProductsCart(props) {
    const cartItems = useSelector(state => state.products.CartItems);

    const [counts, setCounts] = useState({});
    const updateCount = (id, newCount) => {
        setCounts(prev => ({
            ...prev,
            [id]: newCount
        }));
    };

    const total = cartItems.reduce((sum, item) => {
        const count = counts[item.id] !== undefined ? counts[item.id] : 1;
        return sum + (item.price * count);
    }, 0);

    return(
        <article className={styles.container_productsCart}>
            <div>
                <h1 className={styles.productsCart_name}>Your cart</h1>
                <section className={styles.container_productsItem}>
                    {props.CartItems.map((product) => (
                        <ProductsCartItem
                            product={product}
                            id={product.id}
                            key={product.key}
                            title={product.title}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                            currentCount={counts[product.id] || 1}
                            onCountChange={updateCount}
                        />
                    ))}
                </section>
            </div>
            <div className={styles.block_productsCart}>
                <div className={styles.total}>TOTAL PRICE: <span className={styles.span}>{total}$</span></div>
                <button className={styles.button}>Proceed to checkout</button>
            </div>
        </article>
    );
}