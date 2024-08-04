import styles from "../CSS/Dashboard.module.css";
import {DownIcon} from "../assets/DownIcon.jsx";

export function NavbarItems({name}) {
    return (
        <>
            <b className={styles.headerTitle}>Welcome Back! {name}</b>
            <div className={styles.searchbarParent}>
                <div className={styles.searchbar}>
                    <b>Create Quiz</b>
                </div>
            <div className={styles.profileIconParent}>
                <div className={styles.profileIconWrapper}>
                <b className={styles.initial}>{name.charAt(0).toUpperCase()}</b>
                </div>
                <DownIcon />
            </div>
        </div>
        </>
    )
}