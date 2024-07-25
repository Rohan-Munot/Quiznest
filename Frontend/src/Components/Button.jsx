import styles from "../Pages/Frame.module.css";

export function Button({label, onClick}) {
    return (
        <button role={'button'} onClick={onClick} className={styles.primaryButton}>
            <b className={styles.welcomeToQuiznest}>{label}</b>
        </button>
    )
}