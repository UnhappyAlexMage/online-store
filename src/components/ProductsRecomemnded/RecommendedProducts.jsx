import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsMiscellaneous } from '../../store/fetchApiThunk.js';
import SpecialOffers from './SpecialOffers.jsx';

import styles from './recommendedproducts.module.scss';

export default function RecommendedProducts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsMiscellaneous());
    }, [dispatch])

    const productsListMiscellaneous = useSelector(state => state.products.ProductsMiscellaneous) || [];
    const productsListLimit = productsListMiscellaneous.slice(1, 6);

    return(
        <section className={styles.containerRecommendedProducts}>
            <h3 className={styles.h3}>Worth seeing</h3>
            <div className={styles.sectionWorth}>
                {productsListLimit.map((productM) => (
                    <SpecialOffers 
                        key={productM.key}
                        title={productM.title}
                        image={productM.images}
                    />
                ))}
            </div>
        </section>
    );
}