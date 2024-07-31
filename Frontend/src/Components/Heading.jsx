import styles from "../Pages/Frame.module.css";
import React from "react";

export function Heading() {
    return (
        <div className={styles.welcomeToQuiznestParent}>
            <b className={styles.welcomeToQuiznest}>Welcome to QuizNest</b>
            <div className={styles.loginOrRegister}>Login or Register to start your journey of knowledge.
            </div>
        </div>
    )
}
export const MemoizedHeading = React.memo(Heading);