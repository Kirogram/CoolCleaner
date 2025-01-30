import React from 'react';
import {Text} from "../Text";
import {Flex} from "../Flex";
import {cleaningEventData} from "../../utils/data";

export function CleaningEvent() {
    const eventData = cleaningEventData();
    return (
        <div className="bg-gray padding-item-default">
            <Text text="쿨청소꾼의 특별한 이벤트!" className="text-align_center bold font24"/>
            <Flex className="flex-default option-flex-center">
                {eventData.map((data, i) => (
                    <div className="event-box" key={i}>
                        <Text text={data.title} className="font18 bold padding_10_10_0_10"/>
                        <Text text={data.cotent} className="padding_20_10 preserve-line-breaks font14"/>
                        <Text text={data.tag}
                              className="event-footer text-align_center color-white font12 padding_all_5"/>
                    </div>
                ))}
            </Flex>
        </div>

    )
}
