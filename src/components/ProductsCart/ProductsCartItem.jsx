import styles from './productscartitem.module.scss';
import basketImg from '../../assets/images/basket.png';

export default function ProductsCartItem() {
    return (
        <div className={styles.block_productsItem}>
            <div className={styles.productsItem_info}>
                <img className={styles.img} src={basketImg} alt="" />
                <div className={styles.block_names}>
                    <p className={styles.name}>Nike ZoomX 2023</p>
                    <span className={styles.category}>Sneakers</span>
                </div>
            </div>
            <div className={styles.block_countProducts}>
                <span className={styles.productPrice}>99$</span>
                <div className={styles.block_count}>
                    <button className={styles.button_minus}>—</button>
                    <span className={styles.count}>1</span>
                    <button className={styles.button_plus}>+</button>
                </div>
                <span className={styles.productPriceCount}>99$</span>
            </div>
            <a className={styles.burgerClose} href="#">
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            </a>
        </div>
    );
}