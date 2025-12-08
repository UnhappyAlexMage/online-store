import styles from './promobanner.module.scss';
import discountPuct from '../../assets/images/discount.png';
import saleone from '../../assets/images/saleone.png';
import saletwo from '../../assets/images/saletwo.png';

export default function PromoBanner() {
    return(
        <article className={styles.containerPromoBanner}>
            <section className={styles.promo}>
                <span className={styles.span}>NEW YEAR</span>
                <h1 className={styles.h1}>SALE</h1>
                <button className={styles.button}>See more</button>
                <img className={styles.saleone} src={saleone} alt="First_picture_banner" />
                <img className={styles.saletwo} src={saletwo} alt="Second_picture_banner" />
            </section>
            <div className={styles.imageContainer}>
                <img className={styles.banner} src={discountPuct} alt="picture_promo" />
                <p className={styles.imageContainerP}>save up to <strong className={styles.strong}>50%</strong> off</p>
            </div>
        </article>
    );
}