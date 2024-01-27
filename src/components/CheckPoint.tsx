import React from 'react';
import '../styles/main.scss';
import {useInView} from "react-intersection-observer";

const CheckPoint = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    return (
        <div className="padding-default">
            <div className="padding-component">
                <div className={inView ? "content1-title title-down" : "content1-title"} ref={ref}>
                    쿨청소꾼은 청소에 진심 입니다
                </div>
                <div className="point-text">
                    검증된 청소 달인들로 구성되어 있습니다
                </div>
                <div className={inView ? " text-show" : ""}>
                    <div className="point-box">
                        <div className={"point-box-title"}>단 <span>3팀</span> 진짜 달인만 있습니다</div>
                        <div className={"point-box-body"}>
                            쿨청소꾼은 수익을 위해 검증되지 않은 팀장을 섭외하지 않습니다. 확실하게 검증된 경력 팀장들로만 팀을 구성합니다.
                        </div>
                    </div>
                    <div className="point-box">
                        <div className={"point-box-title"}>지킬 수 있는 <span>약속</span>만 드립니다</div>
                        <div className={"point-box-body"}>
                            전문 상담직원을 쓰지 않습니다. 말로만 다 된다는 상담직원이 아닌 현장에서 직접 청소를 진행하는 팀장이 확실하게 안내 드립니다.
                        </div>
                    </div>
                    <div className="point-box">
                        <div className={"point-box-title"}><span>수수료</span>가 없습니다</div>
                        <div className={"point-box-body"}>
                            자체 홈페이지로 직접 신청하시기에 중개수수료가 발생하지 않습니다. 가장 합리적인 금액으로 수준높은 서비스를 제공합니다.
                        </div>
                    </div>
                    <div className="point-box">
                        <div className={"point-box-title"}><span>신뢰</span>를 먼저 생각합니다</div>
                        <div className={"point-box-body"}>
                            10년이상 지금번호 지금이름 그대로 서비스를 제공하고 있습니다. 잠깐 운영하다 사라져버리는 업체가 아닌 누군가에게 소개할 수 있는 업체가 되겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default CheckPoint;
