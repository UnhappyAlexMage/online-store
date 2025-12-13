import { Fragment } from 'react';

import GetProductsItem from './GetProductsItem.jsx';

import styles from './productssection.module.scss';

export default function GetProductsSection(props) {
    const canLoadMoreTrending = props.productsLimited.length < 10;

    return(
        <article className={styles.article}>
            <div className={styles.blockTrending}>
                <h4 className={styles.h4}>{props.title}</h4>
                {!canLoadMoreTrending && (
                    <div className={styles.inputGroup}>
                        <input className={styles.inputItem} type="text" placeholder="Поиск..." />
                        <input className={styles.inputItem} type="text" placeholder="Фильтр..." />
                    </div>
                )}
                <section className={styles.sectionTrending}>
                    {props.productsLimited.map((product) => (
                        <GetProductsItem 
                            key={product.key}
                            title={product.title}
                            slug={product.slug}
                            price={product.price}
                            image={product.images}
                        />
                    ))}
                </section>
                {canLoadMoreTrending && (<Fragment>
                    <button className={styles.button} onClick={props.onShowClick}>
                        See more
                    </button>
                </Fragment>)}
                {!canLoadMoreTrending && (<Fragment>
                    <button className={styles.button} onClick={props.onHideClick}>
                        Close
                    </button>
                </Fragment>)}
            </div>
        </article>
    );
}