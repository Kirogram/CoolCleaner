import logo from "../assets/logo/logo-c.png";
import React from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {popupState, sideMenuState} from "../atoms/atom";
import {openPopup} from "../utils/util";
import {Subscription} from "../popup/subscription/Subscription";
import {Link} from "react-router-dom";
import {Text} from "../components/Text";

export function SideMenu() {
    const [sideMenu, setSideMenu] = useRecoilState(sideMenuState);
    const setPopup = useSetRecoilState(popupState);
    if (!sideMenu) return null;

    return (
        <div className="side-menu_background" onClick={() => setSideMenu(false)}>
            <div className="side-menu">
                <img src={logo} alt={logo} className="side-menu-logo"/>
                <button className="side-menu-button" onClick={() => openPopup(setPopup, <Subscription/>)}>
                    신청까지 30초!
                </button>
                <div className="side-menu-item">
                    <Link to="/about">쿨청소꾼 소개</Link>
                    <Link to="/servicePrice">서비스 가격</Link>
                    <Link to="/serviceRange">청소 범위</Link>
                    <Link to="/servicePortfolio">청소 포트폴리오</Link>
                    <Link to="/serviceReview">고객 리뷰</Link>
                </div>
                <Text text="빠른 상담 전화" className="bold"/>
                <div className="side-menu-info">
                    <Text text="010-4903-8811" className="font24 bold"/>
                    <Text text="평일 / 주말 08 ~ 24시" className="font12"/>
                </div>
                <Text text="친절과 확실한 전문성으로 응대하겠습니다" className="font12"/>
            </div>
        </div>
    )
}
