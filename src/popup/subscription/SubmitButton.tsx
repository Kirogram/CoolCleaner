import {CleaningOptionProps} from "../../types/type";
import {insertOrder} from "../../api/api";
import {useSetRecoilState} from "recoil";
import {modalState, popupState} from "../../atoms/atom";
import {WarningModal} from "../../modal/WarningModal";
import {closePopup, openModal} from "../../utils/util";
import {SuccessModal} from "../../modal/SuccessModal";

export function SubmitButton({subscriptionData}: CleaningOptionProps) {

    const setModal = useSetRecoilState(modalState);
    const setPopup = useSetRecoilState(popupState);

    function saveData() {
        if (subscriptionData.cleaning === '' || subscriptionData.locale === '' || subscriptionData.py === '' || subscriptionData.phone === '') {
            openModal(setModal, <WarningModal></WarningModal>);
            return;
        }
        insertOrder(subscriptionData).then((d) => {
            console.log(d);
            closePopup(setPopup);
            openModal(setModal, <SuccessModal></SuccessModal>);
        })
    }

    return (
        <div
            className={subscriptionData.cleaning === '' || subscriptionData.locale === '' || subscriptionData.py === '' || subscriptionData.phone === '' ? "call-order-box disabled" : "call-order-box"}>
            <button onClick={saveData}>상담신청</button>
            <div className="privacy-text">
                상담신청시 <span onClick={() => {
            }}>개인정보처리방침</span>에 동의합니다.
            </div>
        </div>
    );
}
