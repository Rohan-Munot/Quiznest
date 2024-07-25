import styles from '../Pages/Frame.module.css';

export function InputBox({label, placeholder, type}) {
    return (

            <div className={styles.inputFields}>
                <div className={styles.title}>{label}</div>
                <div>
                    <input className={`${styles.inputFieldsParent} ${styles.placeholderTextWrapper}`} placeholder={placeholder} type={type}></input>
                </div>
            </div>
    )
}