import {atom} from "recoil";

export const selectedSidebarItemState = atom({
    key: 'selectedSidebarItemState', // unique ID (with respect to other atoms/selectors)
    default: 'Dashboard' // default value (aka initial value)
})