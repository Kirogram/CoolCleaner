import React from 'react';
import '../styles/main.scss';
import {useRecoilState} from "recoil";
import {modalState} from "../atoms/atom";
import {closeModal} from "../utils/util";

export function Modal() {
    const [modal, setModal] = useRecoilState(modalState);
    if (modal.isOpen === false) return null;

    return (
        <div className="modal-full flex option-flex-center-vertical">
            <div className="modal-box">
                {modal.data}
                <div className="modal-button">
                    <button onClick={() => closeModal(setModal)}>확인</button>
                </div>
            </div>
        </div>
    )
}
