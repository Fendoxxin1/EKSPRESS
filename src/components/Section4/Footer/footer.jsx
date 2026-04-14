import styles from "./client.module.css";
export default function Footer() {
    return <div className={styles.Footer}>
        <div className={styles.Express}>
            <div className={styles.fastgo}>
                <h1>EKSPRESS</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.</p>
            </div>
            <div className={styles.Navigation}>
                <h2>Navigation</h2>
                <h5>Home</h5>
                <h5>About Us</h5>
                <h5>Services</h5>
                <h5>Contact Us</h5>
            </div>
            <div className={styles.Project}>
                <h2>Recent Project</h2>
                <div className={styles.board}></div>
            </div>
            <div className={styles.Subscribe}>
                <h2>Subscribe Us</h2>
                <input type="text" placeholder="Enter Your Email" name="" id="" />
                <button>Subscribe Now</button>
            </div>
        </div>
        <div className={styles.kent8}></div>
        <div className={styles.Piva}>
            <h2>Copyright © 2023 Ekspress</h2>
            <h2>Designed by TokoTema</h2>
        </div>
    </div>
}