import React from 'react';
import {Text} from "../Text";
import {Flex} from "../Flex";
import {minimumPriceData, priceData} from "../../utils/data";

export function CleaningPrice() {
    const minimumPrice = minimumPriceData();
    const price = priceData();
    return (
        <div className="padding-item-default">
            <Text text="정직하고 투명한 가격안내" className="text-align_center font24 bold"/>
            <Text text="모든 비용을 투명하고 정확하게 안내하고 있습니다" className="text-align_center"/>
            <Flex className="price-box option-flex-center">
                <div className="price-main">
                    <Text text="19평 이하 금액" className="font18 bold padding_top_20"/>
                    {minimumPrice.map((data, i) => (
                        <Flex className="border-bottom-1 align-items_center flex-between padding_all_10"
                              key={i + data.title}>
                            <Text text={data.title}/>
                            <div><span className="color-orange font24 bold">{data.price}</span>원</div>
                        </Flex>
                    ))}
                    <Text text="20평 이상 평당 금액" className="font18 bold padding_20_0"/>
                    <Flex className="option-flex-center">
                        {price.map((data, i) => (
                            <div className="price-py-box text-align_center color-white" key={i + data.title}>
                                <Text text={data.title}/>
                                <Text text={`${data.price}원`} className="font18 bold"/>
                            </div>
                        ))}
                    </Flex>
                    <Text text={`평수는 공급면적 기준입니다.\n유선상담을 통해 정확한 가격을 한번더 안내 드립니다`}
                          className="font12 preserve-line-breaks padding_bottom_50 text-align_center"/>

                    <div className="office-box">
                        <Text text="사업장 청소 고객님 이신가요?" className="text-align_center font24 bold"/>
                        <Text text={`현장상황과 고객님 요청에 맞춰 \n 최적의 견적을 안내 드리도록 하겠습니다`}
                              className="font16 preserve-line-breaks text-align_center padding_top_20"/>
                    </div>
                </div>
            </Flex>
        </div>

    )
}
