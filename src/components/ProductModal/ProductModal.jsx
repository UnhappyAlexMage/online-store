import { useSelector } from 'react-redux';

import styles from './productmodal.module.scss';

import basketImg from '../../assets/images/basket.png';

export default function ProductModal() {
    const selectedProduct = useSelector(state => state.products.selectedProduct);
    return(
        <article className={styles.container_modal}>
            <div className={styles.block_modal}>
                <img className={styles.main_img} src={basketImg} alt="" />
                <div className={styles.images_column}>
                    <img className={styles.subsidiary_img} src={basketImg} alt="" />
                    <img className={styles.subsidiary_img} src={basketImg} alt="" />
                    <img className={styles.subsidiary_img} src={basketImg} alt="" />
                    <img className={styles.subsidiary_img} src={basketImg} alt="" />
                    <img className={styles.subsidiary_img} src={basketImg} alt="" />
                </div>
                <section className={styles.block_description_product}>
                    <span className={selectedProduct.title}>Bouncing sneakers Hermes</span>
                    <span className={styles.spanPrice}>599$</span>
                    <span className={styles.sizes}>Sizes:</span>
                    <p className={selectedProduct.descriptions}>Desctiption clothes product</p>
                    <div className={styles.block_buttons}>
                        <button className={styles.buttonAdd}>Add to cart</button>
                        <button className={styles.buttonNext}>Similar options</button>
                    </div>
                </section>
            </div>
        </article>
    );
}