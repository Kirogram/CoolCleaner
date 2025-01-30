import React from 'react';
import '../../App.scss'
import cleaner from '../../assets/main/cleaner.png'
import {Flex} from "../Flex";
import {Text} from "../Text";
import {Check} from "../Check";


export function CleaningInformation() {
    return (
        <div className="padding-item-default bg-gray">
            <Flex className="flex-default">
                <div className="cleaner-img">
                    <img src={cleaner} alt="cleaner"/>
                </div>
                <div>
                    <Text text="청소는 누가 하는지가 중요합니다" className="font18 bold text-align_center padding_bottom_50"/>
                    <Text text="청소는 누구나 할 수 있지만 누가하는지에 따라 결과물이 엄청나게 차이가 납니다"
                          className="font14 preserve-line-breaks"/>
                    <Text text="'쿨청소꾼'은 자신있습니다" className="font18 bold text-align_center padding_20_0"/>
                    <div className="cleaning-information">
                        <Check/> 맞는 <span>세정제와 도구</span>를 사용합니다<br/>
                        <Check/><span>담당영역 분리</span>를 통해 전문적으로 청소합니다<br/>
                        <Check/>수년간 함께해온 <span>고정팀</span>이 완벽한 호흡으로
                        청소합니다<br/>
                        <Check/>보이지 않는곳까지 <span>탈거하여 청소</span>합니다<br/>
                        <Check/>검수 후 입금! <span>후불제</span>로 운영됩니다<br/>
                        <Check/><span>A/S 기간 3일</span> , 사후관리도 확실합니다<br/>
                    </div>
                    <Text text="믿어주신 마음 미소로 보답하겠습니다" className="font18 bold text-align_center padding_20_0"/>
                </div>
            </Flex>
        </div>
    )
}
