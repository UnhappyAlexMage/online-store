import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/fetchCategories.js';

import styles from './sidebar.module.scss';

export default function Sidebar() {
    const categoriesList = useSelector(state => state.categories.v1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return(
        <aside className={styles.sidebar}>
            <div className={styles.sidbarNavigation}>
                <div className={styles.title}>
                    <h2>CATEGORIES</h2>
                </div>
                <ul className={styles.sidebarList}>
                    {categoriesList.map(category => (<li className={styles.sidebarItem} key={category.id}>{category.name}</li>))}
                </ul>
                <hr></hr>
                <div className={styles.sidebarHelp}>
                    <span className={styles.span}><a href="">Help</a></span>
                    <span className={styles.span}><a href="">Terms & Conditions</a></span>
                </div>
            </div>
        </aside>
    );
}
