import React from 'react';
import '../styles/main.scss';
import localeImg from '../assets/main/locale.png'
import {useInView} from "react-intersection-observer";

const Locale = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    return (
        <div className="padding-default ">
            <div className="padding-component">
                <div className={inView ? "content1-title title-down" : "content1-title"} ref={ref}>
                    수도권 어디든 달려갑니다
                </div>
                <div className="locale-img-mobile">
                    <img src={localeImg} alt={localeImg}/>
                </div>
                <div className="flex option-flex-center">
                    <div className="locale-img">
                        <img src={localeImg} alt={localeImg}/>
                    </div>
                    <div className={inView ? "locale-text text-show" : "locale-text"} >
                        <div className="locale-title">
                            [청소가능 지역]
                        </div>
                        <div className="locale-item">
                            서울 , 인천 , 경기도 전지역
                        </div>
                        <div className="">
                            수도권 어디든 방문하여 완벽한 청소를 약속 드립니다<br/>
                            고객님 일정에 맞춰서 완벽 서비스를 진행합니다<br/>
                            100% 예약제 진행으로 고객님 댁에 집중합니다
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Locale;
