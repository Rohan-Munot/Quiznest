import {Link} from "react-router-dom";
import styles from "../CSS/Frame.module.css";
import React from "react";

export function BottomWarning({label, buttonText, to}) {
    return (
        <div className={styles.alreadyHaveAnContainer}>
            <span>{label}</span>
            <Link className={styles.loginNow} to={to}>{buttonText}</Link>
        </div>
    )
}

export const MemoizedBottomWarning = React.memo(BottomWarning);