import React from 'react';
import '../../styles/main.scss';
import {useSelector} from "react-redux";
import WarningModal from "./WarningModal";
import DefaultModal from "./DefaultModal";

const Modal = () => {
    const modal = useSelector((state: any) => {
        return state.popup.value;
    });
    const ModalSubPages = () => {
        if (modal.page_Modal === 'default') {
            return <DefaultModal></DefaultModal>;
        } else if (modal.page_Modal === 'warning') {
            return <WarningModal></WarningModal>;
        }

        return null;
    }
    if (modal.openModal === true) {
        return (
            <div className={"modal-full flex option-flex-center-vertical"}>
                <ModalSubPages></ModalSubPages>
            </div>
        )
    }

    return null;
}
export default Modal;
