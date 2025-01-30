import React from "react";
import {StatisticItem} from "./StatisticItem";
import {Text} from "../Text";

export function Statistics() {
    return (
        <div className="padding-component">
            <Text text="데이터로 증명합니다" className="text-align_center padding_bottom_20 bold font24"/>
            <div className="flex-default option-flex-center statistics">
                <StatisticItem header="누적 청소 건수" body="8000건 이상의 청소 경험" count="8,000건+"/>
                <StatisticItem header="청소 전문 경력" body="10년동안 꾸준한 청소 서비스" count="10년+"/>
                <StatisticItem header="누적 고객 만족도" body="고객을 먼저 생각하는 마인드" count="4.9/5.0"/>
            </div>
        </div>
    )
}
