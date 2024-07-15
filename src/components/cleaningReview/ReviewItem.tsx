import {Text} from "../Text";
import {ReviewItemProps} from "../../types/type";
import React from "react";

function ReviewItem({option, index}: ReviewItemProps) {
    return (
        <div className={`review-box ${index > 1 ? 'mobile-hide' : ''}`}>
            <span className="review-tag">{option.REVIEW_PLACE}</span>
            <Text text={option.REVIEW_TAG} className="review-cleaning"/>
            <Text text={option.REVIEW_LOCALE} className="review-locale"/>
            <Text text={option.REVIEW_TEXT} className="review-box-text preserve-line-breaks"/>
        </div>
    )
}

export default React.memo(ReviewItem);
