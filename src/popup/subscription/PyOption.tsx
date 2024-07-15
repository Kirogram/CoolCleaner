import {CleaningOptionProps} from "../../types/type";
import {makePY, setSubscription} from "../../utils/util";

export function PyOption({subscriptionData, setSubscriptionData}: CleaningOptionProps) {
    const pyArray = makePY();

    return (
        <div
            className={`${subscriptionData.cleaning === '' || subscriptionData.locale === '' ? "call-button-box disabled" : "call-button-box"} 
        ${subscriptionData.cleaning !== '' && subscriptionData.locale !== '' && subscriptionData.py === '' ? "call-button-box checked" : "call-button-box"}`}>
            <div className={subscriptionData.py !== '' ? "call-box-title hide" : "call-box-title"}>
                <span>평수선택</span> - 서비스 공간 평수를 선택해주세요
            </div>
            <select onChange={(e) => setSubscription('py', e.target.value, setSubscriptionData)}
                    value={subscriptionData.py}>
                <option key='' value=''></option>
                {pyArray.map(option => (
                    <option key={option.data} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}
