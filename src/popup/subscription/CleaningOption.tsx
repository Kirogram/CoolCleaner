import {setSubscription} from "../../utils/util";
import React from "react";
import {CleaningOptionProps} from "../../types/type";

export function CleaningOption({subscriptionData, setSubscriptionData}: CleaningOptionProps) {
    const options = ['입주청소', '이사청소', '거주청소', '사업장청소'];
    return (
        <div className={subscriptionData.cleaning === '' ? "call-button-box checked" : "call-button-box"}>
            <div className={subscriptionData.cleaning !== '' ? "call-box-title hide" : "call-box-title"}>
                <span>청소선택</span> - 원하시는 청소를 선택해주세요
            </div>
            {options.map(option => (
                <button
                    key={option}
                    onClick={() => setSubscription('cleaning', option, setSubscriptionData)}
                    className={subscriptionData.cleaning === option ? "active" : ""}>
                    {option}
                </button>
            ))}
        </div>
    )
}
