import React from 'react';
import '../styles/main.scss';
import cleaning5 from '../assets/cleaning/cleaning5.jpg'

const Benefit = () => {
    return (
        <div className="padding-default">
            <div className="padding-component">
                <div className="content-header-title">
                    체계적인 청소 메뉴얼
                </div>
                <div className="content-sub-title">
                    절차에 맞춰 꼼꼼하게 청소합니다
                </div>
                <div className="benefit-img">
                    <img src={cleaning5} alt={cleaning5}/>
                </div>
                <div>
                    <div className={"benefit-process"}>
                        청소 서비스 진행절차
                    </div>
                    <div className={"flex-default option-flex-center benefit-order"}>
                        <div className={"benefit-item"}>
                            <div className={"benefit-badge"}>1</div>
                            상담신청
                        </div>
                        <div className={"benefit-item"}>
                            <div className={"benefit-badge"}>2</div>
                            유선상담
                        </div>
                        <div className={"benefit-item"}>
                            <div className={"benefit-badge"}>3</div>
                            청소예약
                        </div>
                        <div className={"benefit-item"}>
                            <div className={"benefit-badge"}>4</div>
                            서비스진행
                        </div>
                        <div className={"benefit-item"}>
                            <div className={"benefit-badge"}>5</div>
                            검수
                        </div>
                        <div>
                            <div className={"benefit-badge"}>6</div>
                            사후관리
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefit;
