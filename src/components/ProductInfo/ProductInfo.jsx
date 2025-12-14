import { useSelector } from 'react-redux';

import styles from './productinfo.module.scss';

export default function ProductInfo() {
    const selectedProduct = useSelector(state => state.products.selectedProduct) || [];
    return(
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
                    <p className={styles.descriptions}>category.name????</p>
                    <div className={styles.block_buttons}>
                        <button className={styles.buttonAdd}>Add to cart</button>
                        <button className={styles.buttonNext}>Similar options</button>
                    </div>
                </section>
            </div>
        </article>
    );
}