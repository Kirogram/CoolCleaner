import React from 'react';
import '../styles/main.scss';
import {Text} from "../components/Text";

export function WarningModal() {
    return (
        <>
            <Text text="필수 정보를 입력해주세요" className="text-align_center font18 bold padding_bottom_20"/>
            <Text text="필수 정보를 입력부탁드립니다" className="text-align_center font14"/>
        </>
    )
}
