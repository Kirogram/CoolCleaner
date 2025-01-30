import React from 'react';
import '../styles/main.scss';
import {Text} from "../components/Text";

export function SuccessModal() {
    return (
        <>
            <Text text="상담 신청이 완료되었습니다" className="text-align_center font18 bold padding_bottom_20"/>
            <Text text={`확인 즉시 유선 연락 드리도록 하겠습니다
            신청해주셔서 감사합니다`} className="text-align_center font14 preserve-line-breaks"/>
        </>
    )
}
