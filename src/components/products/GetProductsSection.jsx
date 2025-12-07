import GetProductsItem from './GetProductsItem.jsx';

import styles from './productssection.module.scss';

export default function GetProductsSection() {
    return(
        <article className={styles.blockTrending}>
            <h4 className={styles.h4}>Trending</h4>
            <section className={styles.sectionTrending}>
                <GetProductsItem />
            </section>
            <button className={styles.button}>See more</button>
        </article>
    );
}