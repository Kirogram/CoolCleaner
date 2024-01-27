import React from 'react';
import '../styles/main.scss';
import '../App.scss';
import check from '../assets/icon/checked.png'
import {useInView} from "react-intersection-observer";


const MyComponent = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    return (
        <div className="padding-default">
            <div className="flex-default option-flex-center">
                <div className="padding-component content1-box">
                    <div className={inView ? "content1-title title-down" : "content1-title"} ref={ref}>
                        가격은 낮게 , 품질은 높게
                    </div>
                    <div className={inView ? "content1-text text-show" : "content1-text"}>
                        <div><img src={check} alt={check}/><span>정확한 가격안내로 정직하게 서비스 합니다</span></div>
                        <div><img src={check} alt={check}/><span>전직원 경력자 고정팀 구성으로 확실하게 청소합니다</span></div>
                        <div><img src={check} alt={check}/><span>완벽한 탈거청소로 수준 높은 결과물을 만들어 냅니다</span></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyComponent;
