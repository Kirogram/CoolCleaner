import React from 'react';
import PriceContent from "../components/PriceContent";

const ServicePrice = () => {
    return (
        <div>
            <PriceContent></PriceContent>
            <div className="content1-title">
                옵션 시공 안내
            </div>
            <div className={"price-option"}>
                유리막 코팅
            </div>
            <div className={"price-option-body"}>
                유리막 나노코팅은 오염이 자주 발생하는 공간에 얇은 유리재질의 피막을 씌워 해당 공간에 발생하는 오염을 원천적으로 차단하는 시공법 입니다
            </div>
            <div className={"price-option"}>
                가격 안내
            </div>
            <div className={"flex option-flex-center"}>
                <div className={"price-table"}>
                    <table>
                        <tr>
                            <td>거울 / 욕실</td>
                            <td>20,000원</td>
                        </tr>
                        <tr>
                            <td>화장실 욕조</td>
                            <td>50,000원</td>
                        </tr>
                        <tr>
                            <td>화장실 좌변기</td>
                            <td>20,000원</td>
                        </tr>
                        <tr>
                            <td>계수대 , 설거지통</td>
                            <td>30,000원</td>
                        </tr>
                        <tr>
                            <td>샤워부스 유리 안,밖</td>
                            <td>50,000원</td>
                        </tr>
                        <tr>
                            <td>화장실 세면대</td>
                            <td>20,000원</td>
                        </tr>
                        <tr>
                            <td>수전, 수도꼭지</td>
                            <td>20,000원</td>
                        </tr>
                        <tr>
                            <td>화장실 벽 타일</td>
                            <td>130,000원</td>
                        </tr>
                        <tr>
                            <td>주방 벽면 타일</td>
                            <td>70,000원</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ServicePrice;
