import React from 'react';
import '../../styles/main.scss';
import {useDispatch} from "react-redux";
import {toggleModal} from "../../reducers/popup";

const WarningModal = () => {
    const dispatch = useDispatch();
    return (
        <div className={"modal-box"}>
            <div className={"modal-title"}>
                필수 정보를 입력해주세요
            </div>
            <div className={"modal-body"}>
                필수 정보를 입력부탁드립니다
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
export default WarningModal;
