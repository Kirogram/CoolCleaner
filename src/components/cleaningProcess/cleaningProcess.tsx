import React from 'react';
import cleaning5 from '../../assets/cleaning/cleaning5.jpg'
import {Text} from "../Text";
import {cleaningProcessData} from "../../utils/data";
import {Flex} from "../Flex";

export function CleaningProcess() {
    const cleaningProcess = cleaningProcessData();
    return (
        <div className="padding-item-default">
            <Text text="체계적인 청소 메뉴얼" className="text-align_center bold font24"/>
            <Text text="절차에 맞춰 꼼꼼하게 청소합니다" className="text-align_center padding_bottom_20"/>
            <div className="benefit-img">
                <img src={cleaning5} alt="cleaning_process"/>
            </div>
            <Text text="청소 서비스 진행절차" className="text-align_center font18 bold"/>
            <Flex className={"flex-default option-flex-center benefit-order"}>
                {cleaningProcess.map(data => (
                    <div className={data.index !== "6" ? "benefit-item" : ""} key={data.index}>
                        <Text text={data.index} className="benefit-badge"/>
                        {data.title}
                    </div>
                ))}
            </Flex>
        </div>
    )
}

