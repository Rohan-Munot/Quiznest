import styles from "../CSS/Frame.module.css";
import React from "react";

export function AdminUserLogin() {
    return (
        <div className={styles.frameDiv}>
            <div className={styles.userSignupWrapper}>
                <div className={styles.userSignup}>User Signup</div>
            </div>
            <div className={styles.userSignupContainer}>
                <div className={styles.userSignup}>Admin Signup</div>
            </div>
        </div>
    )
}
export const MemoizedAdminUserLogin = React.memo(AdminUserLogin);