import {useEffect, useState} from "react";
import {getReviewData} from "../api/api";
import {makeReviewItems} from "../utils/util";
import {ReviewProps} from "../types/type";

export function useReviewsHook() {
    const [reviews, setReviews] = useState<ReviewProps[][]>([]);

    useEffect(() => {
        getReviewData().then((d: ReviewProps) => {
            setReviews(makeReviewItems(d));
        });
    }, []);

    return reviews;
}
