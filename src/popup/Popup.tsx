import React from 'react';
import '../styles/main.scss';
import close from '../assets/icon/close.png';
import {useRecoilState} from "recoil";
import {popupState} from "../atoms/atom";

export function Popup() {
    const [popup, setPopup] = useRecoilState(popupState);
    if (popup.isOpen === false) return null;

    return (
        <div className="popup_background flex option-flex-center">
            <div className={"popup-box"}>
                <div className={"popup-box-header"}>
                    <img src={close} alt={close} onClick={() => {
                        setPopup(prevPopup => ({
                            ...prevPopup,
                            isOpen: false
                        }));
                    }}/>
                </div>
                <div className={"popup-box-body"}>
                    {popup.data}
                </div>
            </div>
        </div>
    )
}


