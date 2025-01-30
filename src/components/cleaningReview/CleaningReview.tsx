import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useReviewsHook} from "../../hooks/useReviewsHook";
import {Text} from "../Text";
import {Flex} from "../Flex";
import {ReviewProps} from "../../types/type";
import ReviewItem from "./ReviewItem";


export function CleaningReview() {
    const reviewData = useReviewsHook();

    return (
        <div className="padding-item-default">
            <Text text="실제고객 리얼후기" className="text-align_center font24 bold"/>
            <Text text="고객님들이 직접 작성해주신 소중한 후기" className="text-align_center padding_bottom_20"/>
            <Carousel showArrows={false} showStatus={false} showIndicators={true} showThumbs={false}
                      autoPlay={true} infiniteLoop={true} interval={8000}
                      animationHandler="fade" stopOnHover={false} swipeable={false}>
                {reviewData.map((reviewItem: ReviewProps[], i: number) => (
                    <Flex className="flex-default option-flex-center" key={i}>
                        {reviewItem.map((option: ReviewProps, i: number) => (
                            <ReviewItem key={i} option={option} index={i}/>
                        ))}
                    </Flex>
                ))}
            </Carousel>
        </div>

    )
}
