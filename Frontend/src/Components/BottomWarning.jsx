import {Link} from "react-router-dom";
import styles from "../Pages/Frame.module.css";

export function BottomWarning({label, buttonText, to}) {
    return (
        <div className={styles.alreadyHaveAnContainer}>
            <span>{label}</span>
            <Link className={styles.loginNow} to={to}>{buttonText}</Link>
        </div>
    )
}