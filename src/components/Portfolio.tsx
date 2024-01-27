import React, {useEffect} from 'react';
import '../styles/main.scss';
import {POST} from "../services/Route";
import {useDispatch, useSelector} from "react-redux";
import {setData, setPF} from "../reducers/portfolio";
import {togglePopup} from "../reducers/popup";
import {useInView} from "react-intersection-observer";


const Portfolio = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    });
    const pot = useSelector((state: any) => {
        return state.pot.value;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        POST('selectPortfolio.do', null).then((d) => {
            dispatch(setData(d));
        });
    }, [dispatch]);

    return (
        <div className="padding-default bg-gray">
            <div className="padding-component">
                <div className="content1-title">
                    포트폴리오
                </div>
                <div className="portfolio-text">
                    실제 청소 진행과정과 결과물을 확인해보세요
                </div>
                <div className={inView ? "flex-default option-flex-center text-show" : "flex-default option-flex-center"} ref={ref}>
                    {
                        pot.data.map((option: any, i: any) => (
                            <div className="portfolio-box" key={i}
                                 onClick={() => {
                                     dispatch(togglePopup('Pot'));
                                     dispatch(setPF(option.PF_SEQ));
                                 }}>
                                <div className={"portfolio-header"}>
                                    <span className="portfolio-title">{option.PF_TITLE} </span>
                                    <span className="portfolio-tag">{option.PF_TAG}</span>
                                    <span className="portfolio-move">자세히 보기 &gt;</span>
                                </div>
                                <div className={"flex-nowrap "}>
                                    <div className="portfolio-img"
                                         style={{"backgroundImage": "url(" + option.PF_MAIN_IMG + ")"}}>청소전
                                    </div>
                                    <div className="portfolio-img"
                                         style={{"backgroundImage": "url(" + option.PF_AFTER_IMG + ")"}}>청소후
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
