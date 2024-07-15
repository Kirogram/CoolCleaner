import React from 'react';
import '../App.scss';
import {Flex} from "../components/Flex";
import {Text} from "../components/Text";
import {Link} from "react-router-dom";

export function Footer() {
    return (
        <div className="footer-bg padding-default">
            <Flex>
                <div className="footer-link"><Link to="/Terms">이용약관</Link></div>
                <div className="footer-link"><Link to="/Privacy">개인정보 처리방침</Link></div>
            </Flex>
            <Text text="쿨청소꾼 010-4903-8811" className="font24 bold color-white "/>
            <Text text="연중무휴 08시-24시 친절 상담" className="font14 bold color-white padding_bottom_10"/>
            <Text text="대표 : 변윤수" className="font12 color-white"/>
            <Text text="연락처 : 010-4903-8811" className="font12 color-white"/>
            <Text text="사업자등록번호 : 330-58-00843" className="font12 color-white"/>
            <Text text="우리은행 1005 - 704 - 606832 ( 쿨청소꾼 )" className="font12 color-white"/>
            <Text text="서울시 중구 다산로 223 , 5층 570호(신당동,신당빌딩)" className="font12 color-white"/>
        </div>
    )
}
