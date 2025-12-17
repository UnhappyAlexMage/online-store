import { removeFromCart } from '../../store/productsSlice.js'
import { useDispatch } from 'react-redux';

import styles from './productscartitem.module.scss';

export default function ProductsCartItem(props) {
  const handleClickPlus = () => {
    props.onCountChange(props.product.id, props.currentCount + 1);
  };

  const handleClickMinus =() => {
    if(props.currentCount > 1) {
      props.onCountChange(props.product.id, props.currentCount - 1);
    }
  }

  const dispatch = useDispatch();
  const removeHandleClick = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(props.product));
  };

    return (
        <div className={styles.block_productsItem}>
            <div className={styles.productsItem_info}>
                <img className={styles.img} src={props.image} alt="" />
                <div className={styles.block_names}>
                    <p className={styles.name}>{props.title}</p>
                    <span className={styles.category}>{props.category}</span>
                </div>
            </div>
            <div className={styles.block_countProducts}>
                <span className={styles.productPrice}>{props.price}$</span>
                <div className={styles.block_count}>
                    <button className={styles.button_minus} onClick={handleClickMinus}>-</button>
                    <span className={styles.count}>{props.currentCount}</span>
                    <button className={styles.button_plus} onClick={handleClickPlus}>+</button>
                </div>
                <span className={styles.productPriceCount}>{props.currentCount * props.price}$</span>
            </div>
            <a onClick={removeHandleClick} className={styles.burgerClose} href="item/delete">
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            </a>
        </div>
    );
}