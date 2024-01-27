import React, {useEffect} from 'react';
import '../styles/main.scss';
import {POST} from "../services/Route";
import {useDispatch, useSelector} from "react-redux";
import {setDetailData} from "../reducers/portfolio";

const PortfolioDetail = () => {
    const pot = useSelector((state: any) => {
        return state.pot.value;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        const params = {PF_SEQ: pot.pfSeq};
        POST('selectPortfolioDetail.do', params).then((d) => {
            dispatch(setDetailData(d));
        })
    }, [dispatch, pot]);
    return (
        <>
            <div className={"detail-portfolio-title"}>
            <span className={"detail-portfolio-tag"}>
                {pot.detailData.PF_TAG}
            </span>
                <div>
                    {pot.detailData.PF_TITLE}
                </div>
            </div>
            <div className="detail-portfolio-box" dangerouslySetInnerHTML={{
                __html: pot.detailData.PF_TEXT
            }}>
            </div>
        </>
    )
}

export default PortfolioDetail;
