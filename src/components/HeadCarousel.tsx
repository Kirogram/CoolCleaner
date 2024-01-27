import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.scss';
import {useDispatch} from "react-redux";
import {setHeaderBg, togglePopup} from "../reducers/popup";
import {InView} from "react-intersection-observer";

const HeadCarousel = () => {
    const dispatch = useDispatch();
    return (
        <>
            <InView as="div" onChange={(inView) => {
                dispatch(setHeaderBg());
            }}>
                <div className={"carousel-header-box"}></div>
            </InView>
            <div className={"carousel-main"}>
                <div className="carousel-bg flex-nowrap option-flex-center-width">
                    <div className="carousel-text">
                        <div className="carousel-text-title title-down"><span>쿨청소꾼은</span><br/>대형업체가 아닙니다</div>
                        <div className="carousel-text-text text-show">단 3팀! 진짜 청소 달인들이 직접 찾아갑니다</div>
                        <div className="carousel-button-box">
                            <button onClick={() => {
                                dispatch(togglePopup('Call'));
                            }}>빠른 상담 신청
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadCarousel;
