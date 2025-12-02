import styles from './footer.module.scss';
import dollarIcon from '../../assets/images/dollar.png';
import gitIcon from '../../assets/images/git.png';
import instagramIcon from '../../assets/images/instagram.png';
import telegramIcon from '../../assets/images/telegram.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a className={styles.a} href="/">
                        <img className={styles.imgLogo} src={dollarIcon} alt="logo" />
                        <h1 className={styles.h1}>Shopi</h1>
                    </a>
                </div>
                <span className={styles.span}>Developed by <a className={styles.a} href="">UnhappyAlexMage</a></span>
                <div className={styles.iconsSocial}>
                    <img href="" className={styles.socialIcons} src={gitIcon} alt="git-icon" />
                    <img href="" className={styles.socialIcons} src={instagramIcon} alt="telegram-icon" />
                    <img href="" className={styles.socialIcons} src={telegramIcon} alt="instagram-icon" />
                </div>
            </div>
        </footer>
    );
}