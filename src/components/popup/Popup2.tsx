import React from 'react';
import '../../styles/main.scss';
import close from '../../assets/icon/close.png';
import {useDispatch, useSelector} from "react-redux";
import {togglePopup_depth2} from "../../reducers/popup";
import Privacy from "../../pages/Privacy";

const Popup2 = () => {
    const popup = useSelector((state: any) => {
        return state.popup.value;
    });
    const dispatch = useDispatch();
    let SubItem = popup.page;
    if (popup.page_depth2 === 'Privacy') {
        SubItem = Privacy;
    }
    if (popup.openPopup_depth2 === true) {
        return (
            <div className="popup-full flex option-flex-center">
                <div className={"popup-box"}>
                    <div className={"popup-box-header"}>
                        <img src={close} alt={close} onClick={() => {
                            dispatch(togglePopup_depth2(null));
                        }}/>
                    </div>
                    <div className={"popup-box-body"}>
                        <SubItem></SubItem>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}


export default Popup2;
