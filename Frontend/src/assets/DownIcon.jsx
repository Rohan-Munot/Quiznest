import React from "react";

export function DownIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#1C4B80" id="Down">
                <mask id="mask0_196_619"  maskUnits="userSpaceOnUse" x="0" y="0" width="16"
                      height="16">
                    <rect id="Bounding box" width="16" height="16" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_196_619)">
                    <path id="keyboard_arrow_up"
                          d="M7.99987 8.38334L5.39987 5.78334C5.27765 5.66111 5.12209 5.6 4.9332 5.6C4.74431 5.6 4.58876 5.66111 4.46654 5.78334C4.34431 5.90556 4.2832 6.06112 4.2832 6.25C4.2832 6.43889 4.34431 6.59445 4.46654 6.71667L7.5332 9.78334C7.66654 9.91667 7.82209 9.98334 7.99987 9.98334C8.17765 9.98334 8.3332 9.91667 8.46654 9.78334L11.5332 6.71667C11.6554 6.59445 11.7165 6.43889 11.7165 6.25C11.7165 6.06112 11.6554 5.90556 11.5332 5.78334C11.411 5.66111 11.2554 5.6 11.0665 5.6C10.8776 5.6 10.7221 5.66111 10.5999 5.78334L7.99987 8.38334Z"/>
                </g>
            </g>
        </svg>

    )
}
export const MemoizedDownIcon = React.memo(DownIcon);