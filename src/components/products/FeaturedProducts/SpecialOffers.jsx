import styles from './specialoffers.module.scss';

export default function SpecialOffers(props) {
    return(
        <div className={styles.container}>
            <div className={styles.itemblock}>
                <img className={styles.itemblock_img} src={props.image} alt="" />
                <span className={styles.span}>{props.title}</span>
            </div>
        </div>
    );
}