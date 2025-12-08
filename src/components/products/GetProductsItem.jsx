import styles from './productsitem.module.scss';

export default function GetProductsItem(props) {

    return(
        <div className={styles.itemblock}>
            <img className={styles.itemblock_img} src={props.image} alt="item-logo" />
            <div className={styles.itemblock_description}>
                <h5 className={styles.descriptionh5}>{props.title}</h5>
                <p className={styles.descriptionsp}>{props.slug}</p>
                <span className={styles.descriptionspan}>{props.price}$</span>
            </div>
        </div>
    );
}