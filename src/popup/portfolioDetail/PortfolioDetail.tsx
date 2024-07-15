import React from 'react';
import {Text} from "../../components/Text";
import {UsePortfolioDetailHook} from "../../hooks/usePortfolioDetailHook";

export function PortfolioDetail({pfSeq}: any) {
    const potData = UsePortfolioDetailHook(pfSeq);
    if (!potData) return null;

    return (
        <>
            <Text text={potData.PF_TITLE} className="text-align_center font24 bold"/>
            <div className="detail-portfolio-box" dangerouslySetInnerHTML={{__html: potData.PF_TEXT}}></div>
        </>
    )
}

