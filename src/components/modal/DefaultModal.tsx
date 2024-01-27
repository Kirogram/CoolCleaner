import React from 'react';
import '../../styles/main.scss';
import {useDispatch} from "react-redux";
import {toggleModal} from "../../reducers/popup";

const DefaultModal = () => {
    const dispatch = useDispatch();
    return (
        <div className={"modal-box"}>
            <div className={"modal-title"}>
                상담 신청이 완료되었습니다
            </div>
            <div className={"modal-body"}>
                확인 즉시 유선 연락 드리도록 하겠습니다<br/>
                신청해주셔서 감사합니다
            </div>
            <div className={"modal-button"}>
                <button onClick={() => {
                    dispatch(toggleModal(null))
                }}>확인
                </button>
            </div>
        </div>
    )
}
export default DefaultModal;
