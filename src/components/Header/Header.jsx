import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.headSection}>
                <div className={styles.contact}>
                    <a className={styles.borderRight} href="mailto:EKSPRESS@mail.com">
                        EKSPRESS@mail.com
                    </a>
                    <a href="tel:+1 (333) 000-0000">+1 (333) 000-0000</a>
                </div>
                <button>Get Quote</button>
            </div>
        </header>
    );
};

export default Header;
