import styles from './productsitem.module.scss';
import logoTest from '../../assets/images/basket.png';

export default function GetProductsItem() {
    return(
        <div className={styles.itemblock}>
            <img className={styles.itemblock_img} src={logoTest} alt="item-logo" />
            <div className={styles.itemblock_description}>
                <h5 className={styles.descriptionh5}>Classic Red Pullover Hoodie</h5>
                <p className={styles.descriptionsp}>classic-red-pullover-hoodie</p>
                <span className={styles.descriptionspan}>99$</span>
            </div>
        </div>
    );
}