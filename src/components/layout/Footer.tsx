import React from 'react';
import '../../App.scss';

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="padding-default footer-text">
                <div className="flex footer-padding">
                    <div>
                        <div className="footer-title">쿨청소꾼</div>
                        <div className="footer-phone">010-4903-8811</div>
                        <div className="footer-box footer-alien">[상담 가능 시간]</div>
                        <div className="footer-box footer-alien">평일/주말</div>
                        <div className="footer-box footer-alien">08시~24시</div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="footer-link"><a href="/terms">이용약관</a></div>
                            <div className="footer-link"><a href="/privacy">개인정보 처리방침</a></div>
                        </div>
                        <div className="">
                            <div className="footer-box">
                                서울시 중구 다산로 223 , 5층 570호(신당동,신당빌딩)
                            </div>
                            <div className="footer-box">
                                대표 : 변윤수
                            </div>
                            <div className="footer-box">
                                사업자등록번호 : 330-58-00843
                            </div>
                            <div className="footer-box">
                                연락처 : 010-4903-8811
                            </div>
                            <div className="footer-box">
                                우리은행 1005 - 704 - 606832 ( 쿨청소꾼 )
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
