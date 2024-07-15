import React from 'react';
import '../App.scss';
import logo from "../assets/logo/logo-c.png"
import logo2 from "../assets/logo/logo-w.png"
import menu from "../assets/icon/menu.png"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {headerColorState, popupState, sideMenuState} from "../atoms/atom";
import {SideMenu} from "./SideMenu";
import {useNavigate} from "react-router-dom";
import {openPopup} from "../utils/util";
import {Subscription} from "../popup/subscription/Subscription";


export function Header() {
    const setSideMenu = useSetRecoilState(sideMenuState);
    const setPopup = useSetRecoilState(popupState);
    const headerColor = useRecoilValue(headerColorState);
    const navigate = useNavigate();

    return (
        <>
            <header className={headerColor ? "header padding-20" : "header padding-20 header-background"}>
                <img src={headerColor ? logo2 : logo} alt="로고" className="header-logo"
                     onClick={() => navigate('/')}/>
                <div className="flex-right">
                    <button className={headerColor ? "header-button color-white" : "header-button"}
                            onClick={() => openPopup(setPopup, <Subscription/>)}>상담신청하기
                    </button>
                    <img src={menu} alt="메뉴" className="menu-icon" onClick={() => setSideMenu(true)}/>
                </div>
            </header>
            <SideMenu></SideMenu>
        </>
    )
}
