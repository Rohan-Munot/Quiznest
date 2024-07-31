import styles from "../CSS/Frame.module.css";
import React from "react";

export function Button({label}) {
    return (
        <button type={"submit"}  className={styles.primaryButton}>
            <b className={styles.welcomeToQuiznest}>{label}</b>
        </button>
    )
}
export const MemoizedButton = React.memo(Button);