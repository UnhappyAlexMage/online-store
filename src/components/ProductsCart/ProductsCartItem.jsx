import { useState } from 'react';
import styles from './productscartitem.module.scss';

export default function ProductsCartItem(props) {
  const [count, setCount] = useState(1);

  const handleClickMinus = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleClickPlus = () => {
    setCount(prevCount => prevCount + 1);
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
                    <span className={styles.count}>{count}</span>
                    <button className={styles.button_plus} onClick={handleClickPlus}>+</button>
                </div>
                <span className={styles.productPriceCount}>{count * props.price}$</span>
            </div>
            <a className={styles.burgerClose} href="#">
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            </a>
        </div>
    );
}