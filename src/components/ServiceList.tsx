import React from 'react';
import '../styles/main.scss';
import {useDispatch} from "react-redux";
import {togglePopup} from "../reducers/popup";
import {changeData} from "../reducers/order";

const ServiceList = () => {
    const cleaningData = [{
        title: "입주청소",
        subTitle: "새집을 더욱 새집처럼",
        text: ["공사 먼지/분진 제거", "방치 오염 토탈 케어", "전구역 탈거 내부케어", "하자 체크"],
        desc: "신축 건물일수록 입주청소가 꼭 필요합니다. 공간을 잘 아는 전문가가 소재와 상황에 맞게 정확한 청소로 새집을 더욱 새집처럼 만들어 드립니다.",
        item: "·아파트 ·오피스텔 ·빌라 ·다세대 ·단독주택",
    }, {
        title: "이사청소",
        subTitle: "전거주자 흔적 제거",
        text: ["생활먼지/방치먼지 제거", "곰팡이 제거", "기름오염 물때 집중 제거", "취약지역 집중 청소"],
        desc: "전거주자의 흔적을 말끔하게 지우고 산뜻한 새출발을 만들어 드립니다. 일반적으로 청소하기 어려운 취약부위를 집중적으로 케어 공간의 컨디션을 끌어올립니다.",
        item: "·아파트 ·오피스텔 ·빌라 ·다세대 ·단독주택",
    }, {
        title: "거주청소",
        subTitle: "완벽한 전문가의 대청소",
        text: ["생활먼지/방치먼지 제거", "취약지역 집중 청소", "기름오염 물때 집중 제거", "요청에 맞는 커스텀 케어"],
        desc: "방치된 오염을 제거하고 공간을 케어합니다. 고객 요청사항에 맞는 커스텀 청소로 최고의 결과물을 제공해 드립니다.",
        item: "·아파트 ·오피스텔 ·빌라 ·다세대 ·단독주택",
    }, {
        title: "사업장청소",
        subTitle: "컨디션 회복 청소",
        text: ["사업장 특수 오염제거", "맞춤형 공간케어 컨설팅", "특수손상 복구청소", "대형 장비 청소"],
        desc: "신규 식당,오래된 주방부터 일반 사무실 대형건물 학교 학원등 가정집이 아닌 공간에 컨디션을 최대치로 끌어올립니다. 최선의 견적을 안내드립니다.",
        item: "·식당 ·사무실 ·학교 ·학원 ·빌딩/건물",
    }];
    const dispatch = useDispatch();
    return (
        <div className={"flex-default option-flex-center-vertical"}>
            <div className={"padding-component"}>
                <div className={"content1-title"}>
                    데이터로 증명합니다
                </div>
                <div className="flex-default option-flex-center-only-pc history-box">
                    <div className="history-item flex-default">
                        <div className={"history-title"}>
                            <div className={"history-title-header"}>누적 청소 건수</div>
                            <div className={"history-title-body"}>8000건 이상의 청소 경험</div>
                        </div>
                        <div className={"history-count"}><span>8,000건+</span></div>
                    </div>
                    <div className="history-item flex-default">
                        <div className={"history-title"}>
                            <div className={"history-title-header"}>청소 전문 경력</div>
                            <div className={"history-title-body"}>10년동안 꾸준한 청소 서비스</div>
                        </div>
                        <div className={"history-count"}><span>10년+</span></div>
                    </div>
                    <div className="history-item flex-default">
                        <div className={"history-title"}>
                            <div className={"history-title-header"}>누적 고객 만족도</div>
                            <div className={"history-title-body"}>고객을 먼저 생각하는 마인드</div>
                        </div>
                        <div className={"history-count"}><span>4.9</span>/5.0</div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="padding-component">
                    <div className={"content1-title"}>
                        어떤 청소 서비스를 원하시나요?
                    </div>
                    <div className={"flex-default option-flex-center"}>
                        {
                            cleaningData.map((data, i) => (
                                <div className={"flex-default option-flex-center service-list-box"} key={i}
                                     onClick={() => {
                                         dispatch(changeData({key: 1, value: data.title}))
                                         dispatch(togglePopup('Call'))
                                     }}>
                                    <div className={"service-list-content"}>
                                        <div className={"service-list-title"}>
                                            {data.title}
                                        </div>
                                        <div className={"service-list-sub-title"}>
                                            {data.subTitle}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;
