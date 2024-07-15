import React from 'react';
import {useSetRecoilState} from "recoil";
import {popupState} from "../../atoms/atom";
import {usePortfolioHook} from "../../hooks/usePortfolioHook";
import {Text} from "../Text";
import {PortfolioItem} from "./PortfolioItem";
import {PortfolioProps} from "../../types/type";


export function Portfolio() {
    const setPopup = useSetRecoilState(popupState);
    const portfolioData = usePortfolioHook();
    return (
        <div className="padding-item-default bg-gray">
            <Text text="포트폴리오" className="text-align_center bold font24"/>
            <Text text="실제 청소 진행과정과 결과물을 확인해보세요" className="text-align_center padding_bottom_20"/>
            <div className={"flex-default option-flex-center"}>
                {portfolioData.map((data: PortfolioProps) => (
                    <PortfolioItem setPopup={setPopup} data={data} key={data.PF_SEQ}></PortfolioItem>
                ))}
            </div>
        </div>
    )
}
