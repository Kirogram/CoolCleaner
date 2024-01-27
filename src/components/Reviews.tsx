import React, {useEffect, useState} from 'react';
import '../styles/main.scss';
import {POST} from "../services/Route";
import {Carousel} from "react-responsive-carousel";

async function selectReviews(setReviews: any) {
    const res: any = await POST('selectReviews.do', null);
    const reviews: any = res;
    let reviewCount = 0;
    const reviewArray: any = [];
    let reviewSubArray: any = [];
    reviews.map((data: any) => {
        if (reviewCount < 4) {
            reviewSubArray.push(data);
            reviewCount++;
        } else {
            reviewCount = 0;
            reviewArray.push(reviewSubArray);
            reviewSubArray = [];
            reviewSubArray.push(data);
            reviewCount++;
        }
        return null;
    });
    reviewArray.push(reviewSubArray);
    setReviews(reviewArray);
}

const Reviews = () => {
    const [review, setReviews] = useState([]);
    useEffect(() => {
        selectReviews(setReviews);
    }, []);

    function SetReview() {
        return (
            <Carousel showArrows={false} showStatus={false} showIndicators={true} showThumbs={false}
                      autoPlay={true} infiniteLoop={true} interval={8000}
                      animationHandler="fade" stopOnHover={false} swipeable={false}>
                {
                    review.map((reviewItem: any, i) => {
                        return (
                            <div className="flex-default option-flex-center review-body" key={i}>
                                {
                                    reviewItem.map((option: any, i: number) => {
                                        return (
                                            <div className={i > 1 ? "review-box mobile-hide" : "review-box"} key={i}>
                                                <span className="review-tag">{option.REVIEW_PLACE}</span>
                                                <div className="review-cleaning">{option.REVIEW_TAG}</div>
                                                <div className="review-locale">{option.REVIEW_LOCALE}</div>
                                                <div className="review-box-text">{option.REVIEW_TEXT}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }

    return (
        <div className="padding-default">
            <div className="padding-component">
                <div className="content1-title">
                    실제고객 리얼후기
                </div>
                <div className="review-header-text">
                    플랫폼과 문자로 고객님들이 직접 작성해주신<br className="mobile-line-br"/> 소중한 후기들 입니다
                </div>
                <SetReview></SetReview>
            </div>
        </div>

    )
}

export default Reviews;
