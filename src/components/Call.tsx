import React, {useEffect} from 'react';
import '../styles/main.scss';
import {POST} from "../services/Route";
import {useDispatch, useSelector} from "react-redux";
import {changeData, clearData,} from "../reducers/order";
import {toggleModal, togglePopup, togglePopup_depth2} from "../reducers/popup";

const Call = () => {
    const order = useSelector((state: any) => {
        return state.order.value;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearData());
    }, [dispatch]);
    const pyArray = [];
    for (let i = 10; i < 100; i++) {
        if (i === 10) {
            pyArray.push({data: i, name: i + "평형 ( " + (i * 3.3).toFixed(1) + "㎡ ) 이하"})
        } else if (i === 99) {
            pyArray.push({data: i, name: i + "평형 ( " + (i * 3.3).toFixed(1) + "㎡ ) 이상"})
        } else {
            pyArray.push({data: i, name: i + "평형 ( " + (i * 3.3).toFixed(1) + "㎡ )"})
        }
    }

    const saveData = async () => {
        if (order.cleaning === '' || order.locale === '' || order.py === '' || order.phone === '') {
            dispatch(toggleModal('warning'));
            return;
        }
        const params = {
            cleaning: order.cleaning,
            locale: order.locale,
            py: order.py,
            phone: order.phone
        }
        await POST('insertOrderData.do', params);
        // const data = res;
        dispatch(togglePopup(null));
        dispatch(toggleModal('default'));

    }

    return (
        <div>
            <div className={"call-bg flex option-flex-center-vertical"}>
                <div>
                    <div className={"call-title"}>
                        5분안에 연락드립니다
                    </div>
                    <div className={"call-sub-title"}>
                        상담신청 남겨주시면 확인즉시 연락드립니다<br/>
                        상담은 확정이 아닙니다 편하게 신청해주세요
                    </div>
                    <div className={order.cleaning === '' ? "call-button-box checked" : "call-button-box"}>
                        <div className={order.cleaning !== '' ? "call-box-title hide" : "call-box-title"}>
                            <span>청소선택</span> - 원하시는 청소를 선택해주세요
                        </div>
                        <button onClick={() => dispatch(changeData({key: 1, value: '입주청소'}))}
                                className={order.cleaning === '입주청소' ? "active" : ""}>입주<br/>청소
                        </button>
                        <button onClick={() => dispatch(changeData({key: 1, value: '이사청소'}))}
                                className={order.cleaning === '이사청소' ? "active" : ""}>이사<br/>청소
                        </button>
                        <button onClick={() => dispatch(changeData({key: 1, value: '거주청소'}))}
                                className={order.cleaning === '거주청소' ? "active" : ""}>거주<br/>청소
                        </button>
                        <button onClick={() => dispatch(changeData({key: 1, value: '사업장청소'}))}
                                className={order.cleaning === '사업장청소' ? "active" : ""}>사업장<br/>청소
                        </button>
                    </div>
                    <div className={`${order.cleaning === '' ? "call-button-box disabled" : "call-button-box"} 
                    ${order.cleaning !== '' && order.locale === '' ? "call-button-box checked" : "call-button-box"}`}>
                        <div className={order.locale !== '' ? "call-box-title hide" : "call-box-title"}>
                            <span>지역선택</span> - 서비스 받으실 지역을 선택해주세요
                        </div>
                        <button onClick={() => dispatch(changeData({key: 2, value: '서울'}))}
                                className={order.locale === '서울' ? "active" : ""}>서울
                        </button>
                        <button onClick={() => dispatch(changeData({key: 2, value: '경기도'}))}
                                className={order.locale === '경기도' ? "active" : ""}>경기도
                        </button>
                        <button onClick={() => dispatch(changeData({key: 2, value: '인천'}))}
                                className={order.locale === '인천' ? "active" : ""}>인천
                        </button>
                    </div>
                    <div
                        className={`${order.cleaning === '' || order.locale === '' ? "call-button-box disabled" : "call-button-box"} 
                    ${order.cleaning !== '' && order.locale !== '' && order.py === '' ? "call-button-box checked" : "call-button-box"}`}>
                        <div className={order.py !== '' ? "call-box-title hide" : "call-box-title"}>
                            <span>평수선택</span> - 서비스 공간 평수를 선택해주세요
                        </div>
                        <select onChange={(e) => dispatch(changeData({key: 3, value: e.target.value}))}>
                            <option key='' value=''></option>
                            {
                                pyArray.map((option) => (
                                    <option key={option.data} value={option.name}>{option.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div
                        className={`${order.cleaning === '' || order.locale === '' || order.py === '' ? "call-button-box disabled" : "call-button-box"} 
                    ${order.cleaning !== '' && order.locale !== '' && order.py !== '' && order.phone === '' ? "call-button-box checked" : "call-button-box"}`}>
                        <div className={"call-box-title"}>
                            <span>연락처입력</span> - 상담 받으실 연락처를 입력해주세요
                        </div>
                        <input type="tel" placeholder="핸드폰 번호를 입력해주세요"
                               onChange={(e) => dispatch(changeData({key: 4, value: e.target.value}))}/>
                    </div>
                    <div
                        className={order.cleaning === '' || order.locale === '' || order.py === '' || order.phone === '' ? "call-order-box disabled" : "call-order-box"}>
                        <button onClick={() => {
                            saveData()
                        }}>상담신청
                        </button>
                        <div className={"privacy-text"}>
                            상담신청시 <span onClick={() => {
                            dispatch(togglePopup_depth2('Privacy'))
                        }}>개인정보처리방침</span>에 동의합니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Call;
