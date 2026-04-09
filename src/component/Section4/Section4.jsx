import styles from './section4.module.css'
import icon from '../../assets/img/Icon.png'

export default function Section4() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.shopping}>
                <div className={styles.left}>
                    <div className="img"></div>
                </div>
                <div className={styles.right}>
                    <h3>How It Works</h3>
                    <h1>Simplify Your Shipping Experience with Our Easy Step Process</h1>
                    <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.</p>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className="step"><h5>Step 1</h5></div>
                    <img src={icon} alt="" />
                    <h1>Request a Quote</h1>
                    <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
                </div>
                <div className={styles.card}>
                    <div className="step"><h5>Step 1</h5></div>
                    <img src={icon} alt="" />
                    <h1>Provide Details</h1>
                    <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
                </div>
                <div className={styles.card}>
                    <div className="step"><h5>Step 1</h5></div>
                    <img src={icon} alt="" />
                    <h1>Schedule Pick-Up</h1>
                    <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
                </div>
            </div>
        </div>
    )
}