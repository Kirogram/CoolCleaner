import React from 'react';
import '../../styles/main.scss';
import close from '../../assets/icon/close.png';
import {useDispatch, useSelector} from "react-redux";
import {togglePopup} from "../../reducers/popup";
import Call from "../Call";
import portfolioDetail from "../PortfolioDetail";

const Popup = () => {
    const popup = useSelector((state: any) => {
        return state.popup.value;
    });
    const dispatch = useDispatch();
    let SubItem = popup.page;
    if (popup.page === 'Call') {
        SubItem = Call;
    } else if (popup.page === 'Pot') {
        SubItem = portfolioDetail;
    }
    if (popup.openPopup === true) {
        return (
            <div className="popup-full flex option-flex-center">
                <div className={"popup-box"}>
                    <div className={"popup-box-header"}>
                        <img src={close} alt={close} onClick={() => {
                            dispatch(togglePopup(null));
                        }}/>
                    </div>
                    <div className={"popup-box-body"}>
                        <SubItem></SubItem>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}


export default Popup;
