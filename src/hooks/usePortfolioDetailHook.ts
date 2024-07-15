import {useEffect, useState} from "react";
import {PortfolioDetailProps} from "../types/type";
import {getPortfolioDetailData} from "../api/api";

export function UsePortfolioDetailHook(pfSeq: number) {
    const [potData, setPotData] = useState<PortfolioDetailProps>();
    useEffect(() => {
        getPortfolioDetailData({PF_SEQ: pfSeq}).then((d: PortfolioDetailProps) => {
            setPotData(d);
        });
    }, [pfSeq]);

    return potData;
}
