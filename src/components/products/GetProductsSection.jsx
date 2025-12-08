import GetProductsItem from './GetProductsItem.jsx';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsClothes } from '../../store/fetchCategories.js';

import styles from './productssection.module.scss';

export default function GetProductsSection() {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.data.v2);

    useEffect(() => {
        dispatch(fetchProductsClothes())
    }, [dispatch]);

    const productsLimited = productsList.slice(3, 8);

    return(
        <article className={styles.blockTrending}>
            <h4 className={styles.h4}>Trending</h4>
            <section className={styles.sectionTrending}>
                {productsLimited.map((product) => (
                    <GetProductsItem 
                        key={product.key}
                        title={product.title}
                        slug={product.slug}
                        price={product.price}
                        image={product.images}
                    />
                ))}
            </section>
            <button className={styles.button}>See more</button>
        </article>
    );
}