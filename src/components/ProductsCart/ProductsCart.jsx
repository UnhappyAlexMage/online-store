import ProductsCartItem from './ProductsCartItem.jsx';

import styles from './productscart.module.scss';

export default function ProductsCart(props) {
    return(
        <article className={styles.container_productsCart}>
            <div>
                <h1 className={styles.productsCart_name}>Your cart</h1>
                <section className={styles.container_productsItem}>
                    {props.CartItems.map((product) => (
                        <ProductsCartItem 
                            key={product.key}
                            title={product.title}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </section>
            </div>
            <div className={styles.block_productsCart}>
                <div className={styles.total}>TOTAL PRICE: <span className={styles.span}>200$</span></div>
                <button className={styles.button}>Proceed to checkout</button>
            </div>
        </article>
    );
}