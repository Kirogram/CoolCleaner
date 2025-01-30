import {POST} from "../utils/https";
import {OrderProps} from "../types/type";

export function getPortfolioData() {
    return POST('selectPortfolio.do');
}

export function getReviewData() {
    return POST('selectReviews.do');
}

export function insertOrder(subscriptionData: OrderProps) {
    return POST('insertOrderData.do', subscriptionData);
}

export function getPortfolioDetailData(portfolioId: any) {
    return POST('selectPortfolioDetail.do', portfolioId);
}

export function insertLog(referrer: any) {
    return POST('logHistory.do', referrer);
}
