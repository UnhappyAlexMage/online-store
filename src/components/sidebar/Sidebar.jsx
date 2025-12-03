import styles from './sidebar.module.scss';

export default function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <div className={styles.sidbarNavigation}>
                <div className={styles.title}>
                    <h2>CATEGORIES</h2>
                </div>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarItem}>Electronics</li>
                    <li className={styles.sidebarItem}>Clothes</li>
                    <li className={styles.sidebarItem}>Furniture</li>
                    <li className={styles.sidebarItem}>Shoes</li>
                    <li className={styles.sidebarItem}>Miscellaneous</li>
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
