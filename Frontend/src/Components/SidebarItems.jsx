import styles from "../CSS/Dashboard.module.css";
import React from "react";
import {useRecoilState} from "recoil";
import {selectedSidebarItemState} from "../store/atoms/sidebarItemState.jsx";

// export function SidebarItems({icon, text, onClick}) {
//     const [selectedSidebarItem, setSelectedSidebarItem] = useRecoilState(selectedSidebarItemState);
//     const handleClick = () => {
//         setSelectedSidebarItem(text);
//     }
//     return (
//         <div className={`${styles.component1} ${selectedSidebarItem === text ? styles.selected : ''}`} onClick={handleClick}>
//             <img className={`${styles.sidebarIcon} ${selectedSidebarItem === text? styles.selected: ''}`} alt={''} src={icon}/>
//             <div className={styles.dashboard}> {text}</div>
//         </div>
//     )
// }

export const SidebarItem = React.memo(SidebarItems);