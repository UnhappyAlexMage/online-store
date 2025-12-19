
import styles from './promo.module.scss';
import bigSaleImg from '../../assets/images/big_sale.png';

export default function Promo(props) {
    
    const handleClickButton = () => {
        props.setIsClicked(true);
    };

    return (
        <article className={styles.container_card} aria-label="Advertising block">
            <span className={styles.title_promo}>BIG SALE 20%</span>
            <div className={styles.block_promo_card}>
                <div className={styles.description_block}>
                    <span className={styles.span}>THE BESTSELLER OF 2022</span>
                    <h3 className={styles.h3}>LENNON R2D2 WITH NVIDIA 5090 TI</h3>
                    <button onClick={handleClickButton} disabled={props.isClicked} style={{ opacity: props.isClicked ? 0.8 : 1 }} className={styles.button}>{props.isClicked ? "✓Discount is 20%" : "Shop Now" }</button>
                </div>
                <img className={styles.img} src={bigSaleImg} alt="PicturePromo" />
            </div>
        </article>
    );
}