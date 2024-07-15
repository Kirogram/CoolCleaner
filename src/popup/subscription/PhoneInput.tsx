import {CleaningOptionProps} from "../../types/type";
import {setSubscription} from "../../utils/util";

export function PhoneInput({subscriptionData, setSubscriptionData}: CleaningOptionProps) {
    return (
        <div
            className={`${subscriptionData.cleaning === '' || subscriptionData.locale === '' || subscriptionData.py === '' ? "call-button-box disabled" : "call-button-box"} 
        ${subscriptionData.cleaning !== '' && subscriptionData.locale !== '' && subscriptionData.py !== '' && subscriptionData.phone === '' ? "call-button-box checked" : "call-button-box"}`}>
            <div className={"call-box-title"}>
                <span>연락처입력</span> - 상담 받으실 연락처를 입력해주세요
            </div>
            <input
                type="tel"
                placeholder="핸드폰 번호를 입력해주세요"
                value={subscriptionData.phone}
                onChange={(e) => setSubscription('phone', e.target.value, setSubscriptionData)}
            />
        </div>
    );
}
