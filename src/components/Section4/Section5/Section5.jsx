import styles from "./section5.module.css"
import video from "../../../assets/img/video.png";

export default function Section5() {
    return (
        <div className={styles.videpage}>
            <div className={styles.action}>
                <h1>See it in Action</h1>
                <p>Watch Our Video to Get a Clear Understanding of How It Works</p>
            </div>
            <img className={styles.imgvideo} src={video} alt="" />
        </div>
    )
}