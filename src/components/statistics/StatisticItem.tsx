import React from "react";
import {Text} from "../Text";
import {StatisticItemProps} from "../../types/type";
import {Flex} from "../Flex";

export function StatisticItem({header, body, count}: StatisticItemProps) {
    return (
        <Flex className="flex-default statistics_item">
            <div className="statistics_text">
                <Text text={header} className="font18 bold"></Text>
                <Text text={body} className="font12"></Text>
            </div>
            <Text text={count} className="color-blue font24 bold"/>
        </Flex>
    );
}
