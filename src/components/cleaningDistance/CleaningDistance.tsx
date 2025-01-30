import React from 'react';
import localeImg from '../../assets/main/locale.png'
import {Text} from "../Text";
import {Flex} from "../Flex";

export function CleaningDistance() {
    return (
        <div className="padding-item-default">
            <Text text="수도권 어디든 달려갑니다" className="text-align_center font24 bold"/>
            <Flex className="flex-default option-flex-center">
                <div className="locale-img">
                    <img src={localeImg} alt={localeImg}/>
                </div>
                <div>
                    <Text text="서울 , 인천 , 경기도 전지역" className="text-align_center font18 bold padding_bottom_20"/>
                    <Text text={`수도권 어디든 방문하여 완벽한 청소를 약속 드립니다
                고객님 일정에 맞춰서 완벽 서비스를 진행합니다
                100% 예약제 진행으로 고객님 댁에 집중합니다`}
                          className="preserve-line-breaks"/>
                </div>
            </Flex>
        </div>

    )
}
