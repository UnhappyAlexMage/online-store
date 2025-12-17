import { Fragment } from 'react/jsx-runtime';
import ProductsCatalogItem from './ProductsCatalogItem.jsx';

import styles from './productscatalog.module.scss';

export default function ProductsCatalog(props) {
    const canLoadMoreProducts= props.allProducts.length < 16;
    return(
        <article className={styles.article}>
            <div className={styles.blockTrending}>
                <h4 className={styles.h4}>{props.title}</h4>
                {!canLoadMoreProducts && (
                    <div className={styles.inputGroup}>
                        <input className={styles.inputItem} type="text" placeholder="Поиск..." />
                        <input className={styles.inputItem} type="text" placeholder="Фильтр..." />
                    </div>
                )}
                <section className={styles.sectionTrending}>
                    {props.allProducts.map((product) => (
                        <ProductsCatalogItem
                            id={product.id}
                            key={product.key}
                            title={product.title}
                            slug={product.slug}
                            category={product.category.name}
                            price={product.price}
                            image={product.images}
                            onClick={() => props.onProductClick()}
                        />
                    ))}
                </section>
                {canLoadMoreProducts && (<Fragment>
                    <button className={styles.button} onClick={props.onClickShowAll}>
                        See more
                    </button>
                </Fragment>)}
                {!canLoadMoreProducts && (<Fragment>
                    <button className={styles.button} onClick={props.onClickHideAll}>
                        Close
                    </button>
                </Fragment>)}
            </div>
        </article>
    );
}