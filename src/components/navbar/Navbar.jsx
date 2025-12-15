import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';
import basketPict from '../../assets/images/basket.png';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleBurgerClick = evt => {
        evt.preventDefault();
        setShowMenu(!showMenu);
    }

    return(
        <nav className={styles.navbar}>
            <ul className={`${styles.container} ${showMenu ? styles.show : styles.hide}`} >
                <NavLink to="about">
                    <li className={styles.li}>About</li>
                </NavLink>
                <NavLink to="products">
                    <li className={styles.li}>Products</li>
                </NavLink>
                <div className={styles.containerButtons}>
                    <button className={styles.buttonLogin}>Sign In</button>
                    <button className={styles.buttonRegis}>Sign Up</button>
                </div>
                <a className={styles.a} href="#"><img src={basketPict} alt="picture_shop" /></a>
            </ul>
            <a href="/" className={`${styles.burger} ${showMenu ? styles.burgerActive : ''}`} onClick={handleBurgerClick}>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            </a>
        </nav>
    );
}