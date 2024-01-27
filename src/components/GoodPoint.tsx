import React from 'react';
import '../styles/main.scss';
import {useInView} from "react-intersection-observer";

const GoodPoint = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    return (
        <div className={"bg-gray padding-100"} ref={ref}>
            <div className="content1-title">
                쿨청소꾼의 특별한 이벤트!
            </div>
            <div className={inView ? "flex-default option-flex-center text-show" : "flex-default option-flex-center"}>
                <div className={"event-box"}>
                    <div className={"event-title"}>
                        고급 피톤치드 연무 무료 서비스
                    </div>
                    <div className={"event-desc"}>
                        청소신청 고객님 대상<br/> 고급 피톤치드 원액 연무서비스를 제공합니다
                    </div>
                    <div className={"event-footer"}>
                        피톤치드 연무 무료
                    </div>
                </div>
                <div className={"event-box"}>
                    <div className={"event-title"}>
                        1+1 추가 할인 이벤트
                    </div>
                    <div className={"event-desc"}>
                        청소와 옵션 시공 함께 신청시<br/> 10 ~ 30%금액을 추가로 할인하여 드립니다
                    </div>
                    <div className={"event-footer"}>
                        추가 할인
                    </div>
                </div>
                <div className={"event-box"}>
                    <div className={"event-title"}>
                        지인 소개 이벤트
                    </div>
                    <div className={"event-desc"}>
                        추천받은 지인이 청소 진행시<br/> 소개해준 고객님에게 현금 1만원을 증정해 드립니다
                    </div>
                    <div className={"event-footer"}>
                        현금 or 상품권 제공
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GoodPoint;
