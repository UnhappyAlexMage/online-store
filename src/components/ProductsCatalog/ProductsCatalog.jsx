import { Fragment } from 'react/jsx-runtime';
import ProductsCatalogItem from './ProductsCatalogItem.jsx';

import styles from './productscatalog.module.scss';

export default function ProductsCatalog() {
    const canLoadMoreTrending = true;
    return(
        <article className={styles.article}>
            <div className={styles.blockTrending}>
                <h4 className={styles.h4}>Related products</h4>
                {!canLoadMoreTrending && (
                    <div className={styles.inputGroup}>
                        <input className={styles.inputItem} type="text" placeholder="Поиск..." />
                        <input className={styles.inputItem} type="text" placeholder="Фильтр..." />
                    </div>
                )}
                {/* <section className={styles.sectionTrending}>
                    {props.productsLimited.map((product) => (
                        <GetProductsItem 
                            key={product.key}
                            title={product.title}
                            slug={product.slug}
                            price={product.price}
                            image={product.images}
                        />
                    ))}
                </section> */}
                <ProductsCatalogItem />
                {canLoadMoreTrending && (<Fragment>
                    <button className={styles.button} onClick={1}> {/*props.onShowClick*/}
                        See more
                    </button>
                </Fragment>)}
                {!canLoadMoreTrending && (<Fragment>
                    <button className={styles.button} onClick={2}> {/*props.onHideClick*/}
                        Close
                    </button>
                </Fragment>)}
            </div>
        </article>
    );
}