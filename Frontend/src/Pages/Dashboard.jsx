import styles from "../CSS/Dashboard.module.css"
import {MemoizedLogo} from "../Components/Logo.jsx";
import {useRecoilState} from "recoil";
import {selectedSidebarItemState} from "../store/atoms/sidebarItemState.jsx";
import {RecoilRoot} from "recoil";
import {NavbarItems} from "../Components/NavbarItems.jsx";
import React from "react";
import {MemoizedPageInfoIcon,} from "../assets/PageInfoIcon.jsx";
import {MemoizedLogoutIcon} from "../assets/LogoutIcon.jsx";
import {MemoizedReportsIcon} from "../assets/ReportsIcon.jsx";
import {MemoizedSettingsIcon} from "../assets/SettingsIcon.jsx";
import {MemoizedManageSearchIcon} from "../assets/ManageSearchIcon.jsx";
import {MemoizedAddIcon} from "../assets/AddIcon.jsx";


function SidebarItems({icon: Icon, text, onClick}) {
    const [selectedSidebarItem, setSelectedSidebarItem] = useRecoilState(selectedSidebarItemState);
    const handleClick = () => {
        setSelectedSidebarItem(text);
    }
    return (
        <div className={`${styles.component1} ${selectedSidebarItem === text ? styles.selected : ''}`} onClick={handleClick}>
            <Icon isSelected={selectedSidebarItem === text} className={`${styles.sidebarIcon} ${selectedSidebarItem === text? styles.selected: ''}`}/>
            <div className={styles.dashboard}> {text}</div>
        </div>
    )
}


export function Dashboard() {
    let firstName = localStorage.getItem("firstName");
    return (
        <RecoilRoot>
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <MemoizedLogo />
                        </div>
                </div>
                <div className={styles.sidebarComponentParent}>
                    <SidebarItems icon={MemoizedPageInfoIcon} text={'Dashboard'} onClick={() => {}}/>
                    <SidebarItems icon={MemoizedAddIcon} text={'Add'} onClick={() => {}}/>
                    <SidebarItems icon={MemoizedManageSearchIcon} text={'Manage Quizzes'} onClick={() => {}}/>
                    <SidebarItems icon={MemoizedSettingsIcon} text={'Settings'} onClick={() => {}}/>
                    <SidebarItems icon={MemoizedReportsIcon} text={'Reports'} onClick={() => {}}/>
                    <SidebarItems icon={MemoizedLogoutIcon} text={'Logout'} onClick={() => {}}/>
                </div></div>
            <div className={styles.navbar}>
                <NavbarItems name={firstName} />
            </div>
        </div>
        </RecoilRoot>
    )
}