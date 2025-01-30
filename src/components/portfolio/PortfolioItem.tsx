import React from "react";
import {openPopup} from "../../utils/util";
import {PortfolioDetail} from "../../popup/portfolioDetail/PortfolioDetail";
import {Text} from "../Text";
import {Flex} from "../Flex";
import {PortfolioItemProps} from "../../types/type";

export function PortfolioItem({setPopup, data}: PortfolioItemProps) {

    return (
        <div className="portfolio-box" key={data.PF_SEQ}
             onClick={() => openPopup(setPopup, <PortfolioDetail pfSeq={data.PF_SEQ}></PortfolioDetail>)}>
            <Flex className="align-items_center">
                <Text text={data.PF_TAG} className="portfolio-tag"/>
                <Text text={data.PF_TITLE}/>
            </Flex>
            <Flex>
                <div className="portfolio-img"
                     style={{"backgroundImage": `url("${data.PF_MAIN_IMG}")`}}>청소 전
                </div>
                <div className="portfolio-img"
                     style={{"backgroundImage": `url("${data.PF_AFTER_IMG}")`}}>청소 후
                </div>
            </Flex>
            <Text text="진행과정 보기 &gt;" className="text-align_center bold"/>
        </div>
    )
}
