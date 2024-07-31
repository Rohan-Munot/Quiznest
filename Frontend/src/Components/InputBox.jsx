import styles from '../Pages/Frame.module.css';
import React from "react";

export function InputBox({id, name, label, placeholder, type='text', onChange, onBlur, value, error}) {
    return (
            <div className={styles.inputFields}>
                <div className={styles.title}>{label}</div>
                <div>
                    <input id={id} name={name} onChange={onChange} onBlur={onBlur} value={value} className={`${styles.inputFieldsParent} ${styles.placeholderTextWrapper}`} placeholder={placeholder} type={type}></input>
                </div>
                {error && <div className={styles.errorText}>{error}</div>}
            </div>
    )
}
export const MemoizedInputBox = React.memo(InputBox);