import styles from './productscatalogitem.module.scss';
import basketLogo from '../../assets/images/basket.png';

export default function ProductsCatalogItem() {
    return(
        <div className={styles.itemblock} onClick={1}>
            <img className={styles.itemblock_img} src={basketLogo} alt="item-logo" />
            <div className={styles.itemblock_description}>
                <h5 className={styles.descriptionh5}>Nike</h5>
                <p className={styles.descriptionsp}>Nike super duper krossovki da da</p>
                <span className={styles.descriptionspan}>99$</span>
            </div>
        </div>
    );
}