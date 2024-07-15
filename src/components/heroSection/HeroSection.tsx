import React, {useEffect} from 'react';
import {InView} from "react-intersection-observer";
import {useSetRecoilState} from "recoil";
import {headerColorState, popupState} from "../../atoms/atom";
import {changeHeaderColor, openPopup} from "../../utils/util";
import {Subscription} from "../../popup/subscription/Subscription";
import {Text} from "../Text";

export function HeroSection() {
    const setHeaderColor = useSetRecoilState(headerColorState);
    const setPopup = useSetRecoilState(popupState);

    useEffect(() => {
        return () => setHeaderColor(false);
    }, [setHeaderColor]);


    return (
        <InView as="div" onChange={(inView) => changeHeaderColor(inView, setHeaderColor)}
                threshold={0.9} className="hero padding-20 flex option-flex-center-width">
            <div className="color-white">
                <Text text="쿨청소꾼은" className="font48 bold"/>
                <Text text="대형업체가 아닙니다" className="font36 bold"/>
                <Text text="단 3팀! 진짜 청소 달인들이 직접 찾아갑니다" className="padding_top_20 padding_bottom_50"/>
                <button onClick={() => openPopup(setPopup, <Subscription/>)}
                        className="hero_button color-white bold font18">빠른 상담 신청
                </button>
            </div>
        </InView>
    );
}
