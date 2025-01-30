import {setSubscription} from "../../utils/util";
import {CleaningOptionProps} from "../../types/type";

export function LocaleOption({subscriptionData, setSubscriptionData}: CleaningOptionProps) {
    return (
        <div className={`${subscriptionData.cleaning === '' ? "call-button-box disabled" : "call-button-box"} 
        ${subscriptionData.cleaning !== '' && subscriptionData.locale === '' ? "call-button-box checked" : "call-button-box"}`}>
            <div className={subscriptionData.locale !== '' ? "call-box-title hide" : "call-box-title"}>
                <span>지역선택</span> - 서비스 받으실 지역을 선택해주세요
            </div>
            {['서울', '경기도', '인천'].map(option => (
                <button
                    key={option}
                    onClick={() => setSubscription('locale', option, setSubscriptionData)}
                    className={subscriptionData.locale === option ? "active" : ""}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
