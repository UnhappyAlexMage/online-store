import styles from './specialoffers.module.scss';

export default function SpecialOffers(props) {
    return(
        <div className={styles.container}>
            <div className={styles.itemblock}>
                <div className={styles.wrapper}>
                    <img className={styles.itemblock_img} src={props.image} alt="" />
                </div>
                <span className={styles.span}>{props.title}</span>
            </div>
        </div>
    );
}