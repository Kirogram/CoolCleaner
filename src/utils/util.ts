import {OrderProps, PopupState, SetHeaderColorType, SubscriptionMenuProps} from "../types/type";

export function makePY() {
    const pyArray = [];
    for (let i = 10; i < 100; i++) {
        if (i === 10) {
            pyArray.push({data: i, name: i + "평형 ( " + (i * 3.3).toFixed(1) + "㎡ ) 이하"})
        } else if (i === 99) {
            pyArray.push({data: i, name: i + "평형 ( " + (i * 3.3).toFixed(1) + "㎡ ) 이상"})
        } else {
            pyArray.push({data: i, name: i + "평형 ( " + (i * 3.3).toFixed(1) + "㎡ )"})
        }
    }
    return pyArray;
}

export function makeReviewItems(data: any) {
    const reviewArray: any[] = [];
    let reviewSubArray: any[] = [];
    let reviewCount = 0;

    data.forEach((review: any) => {
        if (reviewCount < 4) {
            reviewSubArray.push(review);
            reviewCount++;
        } else {
            reviewArray.push(reviewSubArray);
            reviewSubArray = [review];
            reviewCount = 1;
        }
    });

    if (reviewSubArray.length > 0) {
        reviewArray.push(reviewSubArray);
    }
    return reviewArray;
}

export function openPopup(setPopup: (arg: any) => void, pages: JSX.Element) {
    setPopup((prevPopup: PopupState) => ({
        ...prevPopup,
        isOpen: true,
        data: pages
    }));
}

export function closePopup(setPopup: (arg: any) => void) {
    setPopup((prevPopup: PopupState) => ({
        ...prevPopup,
        isOpen: false,
        data: null
    }));
}

export function openModal(setModal: (arg: any) => void, pages: JSX.Element) {
    setModal((prevModal: PopupState) => ({
        ...prevModal,
        isOpen: true,
        data: pages
    }));
}

export function closeModal(setModal: (arg: any) => void) {
    setModal((prevModal: PopupState) => ({
        ...prevModal,
        isOpen: false,
        data: null
    }));
}

export function changeHeaderColor(inView: boolean, setHeaderColor: SetHeaderColorType) {
    setHeaderColor(inView);
}

export function setSubscription(menu: keyof SubscriptionMenuProps, value: string, setSubscriptionData: any) {
    setSubscriptionData((d: OrderProps) => ({
        ...d, [menu]: value
    }))
}
