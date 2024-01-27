import React, {useCallback, useRef} from 'react';
import '../styles/main.scss';
import '../App.scss'
import cleaner from '../assets/main/cleaner.png'
import checkMark from '../assets/icon/check-mark.png'
import {useInView} from "react-intersection-observer";


const CleaningService = () => {
    const ref = useRef();
    const {ref: inViewRef, inView} = useInView({
        triggerOnce: true
    });
    const setRefs = useCallback(
            (node: any) => {
                ref.current = node;
                inViewRef(node);
            },
            [inViewRef],
        )
    ;
    return (
        <div className="padding-default cleaning-bg">
            <div className="padding-component">
                <div className="content1-img-mobile">
                    <img src={cleaner} alt={cleaner}/>
                </div>
                <div className="flex">
                    <div className="content1-flex-1">
                        <div className={inView ? "content1-title title-down" : "content1-title"} ref={setRefs}>
                            청소는 누가 하는지가 중요합니다
                        </div>
                        <div className={inView ? "content1-text text-show" : "content1-text"}>
                            <div>
                                청소는 누구나 할 수 있지만 누가하는지에 따라 결과물이 엄청나게 차이가 납니다<br/>
                                청소 전문가의 경력,경험이 얼마나 있는지 정성을 얼마나 들이는지가 중요합니다
                            </div>
                            <div className="content1-at-title">
                                '쿨청소꾼'은 자신있습니다
                            </div>
                            <div className={inView ? "content-at text-show" : "content-at"}>
                                <img src={checkMark} alt={checkMark}/>소재에 맞는 <span>세정제와 도구</span>를 사용합니다<br/>
                                <img src={checkMark} alt={checkMark}/><span>담당영역 분리</span>를 통해 전문적으로 청소합니다<br/>
                                <img src={checkMark} alt={checkMark}/>수년간 함께해온 <span>고정팀</span>이 완벽한 호흡으로
                                청소합니다<br/>
                                <img src={checkMark} alt={checkMark}/>보이지 않는곳까지 <span>탈거하여 청소</span>합니다<br/>
                                <img src={checkMark} alt={checkMark}/>검수 후 입금! <span>후불제</span>로 운영됩니다<br/>
                                <img src={checkMark} alt={checkMark}/><span>A/S 기간 3일</span> , 사후관리도 확실합니다<br/>
                            </div>
                            <div className="content-at-after">
                                믿어주신 마음 미소로 보답하겠습니다
                            </div>
                        </div>
                    </div>
                    <div className="content1-img">
                        <img src={cleaner} alt={cleaner}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleaningService;
