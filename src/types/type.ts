export interface SubscriptionMenuProps {
    cleaning: string;
    locale: string;
    py: string;
    phone: string;
}


export interface PopupState {
    isOpen: boolean;
    data: React.ReactNode;
}

export interface TextProps {
    text: string,
    className?: string
}

export type SetHeaderColorType = (arg: any) => void;

export interface CleaningData {
    title: string;
    subTitle: string;
    text: string[];
    desc: string;
    item: string;
}

export interface ServiceListProps {
    cleaningData: CleaningData[];
}


export interface ServiceOptionsProps {
    cleaningData: CleaningData[];
    setSubscription: (value: any) => void;
    setPopup: (value: any) => void;
}

export interface ServiceItemProps {
    data: CleaningData;
    onClick: () => void;
}

export interface StatisticItemProps {
    header: string,
    body: string,
    count: string
}

export interface PortfolioProps {
    PF_AFTER_IMG: string,
    PF_MAIN_IMG: string,
    PF_SEQ: number,
    PF_SUBTITLE: string,
    PF_TAG: string,
    PF_TEXT: string,
    PF_TITLE: string,
}

export interface PortfolioItemProps {
    setPopup: any,
    data: PortfolioProps
}

export interface ReviewProps {
    REVIEW_LOCALE: string,
    REVIEW_PLACE: string,
    REVIEW_POINT: number,
    REVIEW_TAG: string,
    REVIEW_TEXT: string
}

export interface ReviewItemProps {
    option: ReviewProps,
    index: number
}

export interface OrderProps {
    cleaning: string,
    locale: string,
    py: string,
    phone: string
}

export interface CleaningOptionProps {
    subscriptionData: SubscriptionMenuProps;
    setSubscriptionData?: any;
}

export interface PortfolioDetailProps {
    PF_MAIN_IMG: string,
    PF_SEQ: number,
    PF_SUBTITLE: string,
    PF_TAG: string,
    PF_TEXT: string,
    PF_TITLE: string
}
