import { useDispatch } from 'react-redux';
import { selectProduct } from '../../store/productsSlice.js';

import styles from './productscatalogitem.module.scss';

export default function ProductsCatalogItem(props) {
    const dispatch = useDispatch();

    const dispatchProductModal = () => {
        dispatch(selectProduct(props));
    }

    const handleClickProudctModal = () => {
        if(props.onClick)
            props.onClick();
        dispatchProductModal();
    }

    return(
        <div className={styles.itemblock} onClick={handleClickProudctModal}>
            <img className={styles.itemblock_img} src={props.image} alt="item-logo" />
            <div className={styles.itemblock_description}>
                <h5 className={styles.descriptionh5}>{props.title}</h5>
                <p className={styles.descriptionsp}>{props.slug}</p>
                <p className={styles.category}>{props.category}</p>
                <span className={styles.descriptionspan}>{props.price}$</span>
            </div>
        </div>
    );
}