import React from 'react';
import '../../App.scss';
import logo from "../../assets/logo/logo-c.png"
import logo2 from "../../assets/logo/logo-w.png"
import menu from "../../assets/icon/menu.png"
import {useDispatch, useSelector} from "react-redux";
import {togglePopup, toggleSideMenu} from "../../reducers/popup";


const Header = () => {
    const sideMenu = useSelector((state: any) => {
        return state.popup.value;
    });
    const dispatch = useDispatch();


    function SideMenu() {
        if (sideMenu.openSideMenu === true) {
            return (
                <div className={"menu-full"} onClick={() => dispatch(toggleSideMenu())}>
                    <div className={"menu-side-box side-animation"}>
                        <div className={"menu-side-logo"}>
                            <img src={logo} alt={logo}/>
                        </div>
                        <div className={"menu-side-order-box-main"}>
                            <div className={"menu-side-order-box"} onClick={() => {
                                dispatch(togglePopup('Call'));
                            }}>
                                신청까지 30초!
                            </div>
                        </div>
                        <div className={"menu-side-text"}>
                            <div><a href="/about">쿨청소꾼 소개</a></div>
                            <div><a href="/servicePrice">서비스 가격</a></div>
                            <div><a href="/serviceRange">청소 범위</a></div>
                            <div><a href="/servicePortfolio">청소 포트폴리오</a></div>
                            <div><a href="/serviceReview">고객 리뷰</a></div>
                        </div>
                        <div className={"menu-side-phone-main"}>빠른 상담 전화</div>
                        <div className={"menu-side-phone"}>
                            <div className={"menu-side-phone-border"}>
                                010-4903-8811
                            </div>
                            <div>
                                평일 / 주말 08 ~ 24시
                            </div>
                        </div>
                        <div className={"menu-side-phone-bottom"}>
                            친절과 확실한 전문성으로 응대하겠습니다
                        </div>
                    </div>
                </div>
            )
        }

        return null;
    }

    return (
        <>
            <div className={sideMenu.headerNonWhite === true ? "header-box" : "header-box main-bg"}>
                <div className="padding-20">
                    <div className="flex header-width">
                        <img src={sideMenu.headerNonWhite === true ? logo2 : logo} alt={'로고'} className="header-logo"
                             onClick={() => {
                                 window.location.href = '/';
                             }}/>
                        <div className="flex order-div">
                            <div className="order-text" onClick={() => {
                                dispatch(togglePopup('Call'));
                            }}>상담신청하기
                            </div>
                            <div className="menu-box">
                                <img src={menu} alt={menu} className="menu-icon"
                                     onClick={() => dispatch(toggleSideMenu())}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideMenu></SideMenu>
        </>
    )
}

export default Header;
