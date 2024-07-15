import React from 'react';
import {useSetRecoilState} from "recoil";
import {popupState, subscriptionState} from "../../atoms/atom";
import {CleaningData} from "../../types/type";
import {setCleaningData} from "../../utils/data";
import {openPopup} from "../../utils/util";
import {Subscription} from "../../popup/subscription/Subscription";
import {Text} from "../Text";

export function CleaningList() {
    const setSubscription = useSetRecoilState(subscriptionState);
    const setPopup = useSetRecoilState(popupState);
    const cleaningData: CleaningData[] = setCleaningData();

    return (
        <div className="padding-component text-align_center">
            <Text text="어떤 청소 서비스를 원하시나요?" className="font24 text-align_center bold padding_bottom_20"/>
            {cleaningData.map((data, i) => (
                <button className="service-list-box" key={i + data.title}
                        onClick={() => {
                            setSubscription(data.title);
                            openPopup(setPopup, <Subscription/>);
                        }}>
                    <Text text={data.title} className="font24 bold color-white"/>
                    <Text text={data.subTitle} className="font12 color-white"/>
                </button>
            ))}
        </div>
    )
}
