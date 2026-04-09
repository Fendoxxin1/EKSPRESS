import { useState } from "react";
import styles from "./hero.module.css";
import image from "../../assets/Hero_man.jpg";
const Hero = () => {
    const [active, setActive] = useState("home");

    return (
        <div className={styles.nav}>
            <nav className={styles.container}>
                <div className={styles.logo}>
                    <a href="#">
                        <h1>Ekspress</h1>
                    </a>
                </div>
                <ul>
                    <li>
                        <a className={active === "home" ? styles.active : ""} onClick={() => setActive("home")}>
                            home
                        </a>
                    </li>
                    <li>
                        <a
                            className={active === "about" ? styles.active : ""}
                            onClick={() => setActive("about")}
                            href="#"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className={active === "services" ? styles.active : ""}
                            onClick={() => setActive("services")}
                            href="#"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className={active === "contact" ? styles.active : ""}
                            onClick={() => setActive("contact")}
                            href="#"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            className={active === "blog" ? styles.active : ""}
                            onClick={() => setActive("blog")}
                            href="#"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
            <section className={`${styles.container} ${styles.flexCol}`}>
                <div className={styles.hero}>
                    <p className={styles.hero_subTitle}>we are best logistic company</p>
                    <h1 className={styles.hero_title}>
                        Streamline Your Shipping with
                        <br /> Our Cargo Services
                    </h1>
                    <p className={styles.hero_desc}>
                        Simplify your shipping process and make it more efficient with our <br /> cargo services. From
                        start to finish, we'll handle everything to ensure <br /> your cargo arrives safely.
                    </p>
                </div>

                <div className={styles.flex}>
                    <div className={styles.imageSection}>
                        <img src={image} alt="man" />
                        <div className={styles.border}>
                            <span className={styles.bolded}>26K</span>
                            <p>Satisfied Clients</p>
                        </div>
                        <div>
                            <span className={styles.bolded}>12+</span>
                            <p>Years of Experience</p>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <button>Tracking</button>
                        <button>Rate & Ship</button>
                        <br />
                        <div className={styles.input}>
                            <div className={styles.flexed}>
                                <input type="text" placeholder="TRACKING ID" />
                                <button>TRACK</button>
                            </div>
                            <p>
                                See the tracking id on shipping document. <a href="#">Help</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
