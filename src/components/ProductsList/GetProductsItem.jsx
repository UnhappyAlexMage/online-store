import styles from './productsitem.module.scss';

export default function GetProductsItem(props) {
    const newPrice = (props.price * 0.8).toFixed(2);
    return(
        <div className={styles.itemblock}>
            <img className={styles.itemblock_img} src={props.image} alt="item-logo" />
            <div className={styles.itemblock_info}>
                <div className={styles.itemblock_description}>
                    <h5 className={styles.descriptionh5}>{props.title}</h5>
                    <p className={styles.descriptionsp}>{props.slug}</p>
                </div>
                <span className={styles.blockPrice}>
                    {props.isClicked ? (
                        <div className={styles.blockPriceDiscount}>
                            <span className={styles.delPrice}>{props.price}$</span>
                            <span className={styles.newPrice}>{newPrice}$</span>
                        </div>
                    ) : (
                        <span className={styles.price}>{props.price}$</span>
                    )}
                </span>
            </div>
        </div>
    );
}