import React from 'react';
import {subscriptionDataState} from "../../atoms/atom";
import {useRecoilState} from "recoil";
import {Text} from "../../components/Text";
import {CleaningOption} from "./CleaningOption";
import {LocaleOption} from "./LocaleOption";
import {PyOption} from "./PyOption";
import {PhoneInput} from "./PhoneInput";
import {SubmitButton} from "./SubmitButton";

export function Subscription() {
    const [subscriptionData, setSubscriptionData] = useRecoilState(subscriptionDataState);

    return (
        <div className="flex option-flex-center-vertical">
            <div>
                <Text text="5분안에 연락드립니다" className="text-align_center font24 bold padding_bottom_10"/>
                <Text text={`상담신청 남겨주시면 확인즉시 연락드립니다
                    상담은 확정이 아닙니다 편하게 신청해주세요`} className="text-align_center font12 preserve-line-breaks"/>
                <CleaningOption subscriptionData={subscriptionData} setSubscriptionData={setSubscriptionData}/>
                <LocaleOption subscriptionData={subscriptionData} setSubscriptionData={setSubscriptionData}/>
                <PyOption subscriptionData={subscriptionData} setSubscriptionData={setSubscriptionData}/>
                <PhoneInput subscriptionData={subscriptionData} setSubscriptionData={setSubscriptionData}/>
                <SubmitButton subscriptionData={subscriptionData}/>
            </div>
        </div>
    )
}
