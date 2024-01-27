import React from 'react';
import '../styles/main.scss';
import {useInView} from "react-intersection-observer";

const PriceContent = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    return (
        <div className="padding-default ">
            <div className="padding-component">
                <div className={inView ? "content1-title title-down" : "content1-title"} ref={ref}>
                    정직하고 투명한 가격안내
                </div>
                <div className="price-text">
                    모든 비용을 투명하고 정확하게 안내하고 있습니다
                </div>
                <div className="price-box flex option-flex-center">
                    <div className={inView ? "price-main text-show" : "price-main"}>
                        <div className="price-pay-title">
                            22평 이하 금액
                        </div>
                        <div className="flex border-bottom-1">
                            <div className="price-item-title">아파트</div>
                            <div className="price-item-pay"><span>229,000</span> 원</div>
                        </div>
                        <div className="flex border-bottom-1">
                            <div className="price-item-title">다세대/주택</div>
                            <div className="price-item-pay"><span>229,000</span> 원</div>
                        </div>
                        <div className="flex border-bottom-1">
                            <div className="price-item-title">오피스텔</div>
                            <div className="price-item-pay"><span>219,000</span> 원</div>
                        </div>
                        <div className="flex">
                            <div className="price-item-title">원룸</div>
                            <div className="price-item-pay"><span>180,000</span> 원</div>
                        </div>
                        <div className="price-pay-title">
                            23평 이상 평당 금액
                        </div>
                        <div className="flex option-flex-center">
                            <div className={"price-py-box"}>
                                <div className={"price-py-title"}>입주청소</div>
                                <div className={"price-py-cash"}><span>10,900</span>원</div>
                            </div>
                            <div className={"price-py-box"}>
                                <div className={"price-py-title"}>이사청소</div>
                                <div className={"price-py-cash"}><span>10,900</span>원</div>
                            </div>
                            <div className={"price-py-box"}>
                                <div className={"price-py-title"}>거주청소</div>
                                <div className={"price-py-cash"}><span>12,900</span>원</div>
                            </div>
                        </div>
                        <div className="price-pay-title price-after-text">
                            평수는 공급면적 기준입니다<br/>
                            유선상담을 통해 정확한 가격을 한번더 안내 드립니다
                        </div>
                    </div>
                </div>
                <div className={"flex option-flex-center"}>
                    <div className={"office-box"}>
                        <div className="content1-title">
                            사업장 청소 고객님 이신가요?
                        </div>
                        <div className="price-text">
                            현장상황과 고객님 요청에 맞춰 <br className={"mobile-line-br"}/>최적의 견적을 안내 드리도록 하겠습니다
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PriceContent;
