import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/productsSlice.js';

import styles from './productinfo.module.scss';

export default function ProductInfo({ selectedProduct, isSubmitting }) {
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        try {
            await dispatch(addToCart(selectedProduct));
        } catch (error) {
            console.error("Ошибка при добавлении:", error);
        }
    };
    
    return (
        <article className={styles.container_modal}>
            <div className={styles.block_modal}>
                <img className={styles.main_img} src={selectedProduct.image} alt="" />
                <div className={styles.images_column}>
                    <img className={styles.subsidiary_img} src={selectedProduct.image} alt="" />
                    <img className={styles.subsidiary_img} src={selectedProduct.image} alt="" />
                    <img className={styles.subsidiary_img} src={selectedProduct.image} alt="" />
                    <img className={styles.subsidiary_img} src={selectedProduct.image} alt="" />
                    <img className={styles.subsidiary_img} src={selectedProduct.image} alt="" />
                </div>
                <section className={styles.block_description_product}>
                    <span className={styles.span}>{selectedProduct.title}</span>
                    <span className={styles.spanPrice}>{selectedProduct.price}$</span>
                    <span className={styles.sizes}>Sizes:</span>
                    <p className={styles.descriptions}>{selectedProduct.slug}</p>
                    <p className={styles.category}>Category: {selectedProduct.category}</p>
                    <div className={styles.block_buttons}>
                        <button className={styles.buttonAdd} onClick={handleAddToCart} disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.5 : 1 }}>Add to cart</button>
                        <button className={styles.buttonNext}>Similar options</button>
                    </div>
                </section>
            </div>
        </article>
    );
}