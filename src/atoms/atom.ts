import {atom} from "recoil";
import {OrderProps, PopupState} from "../types/type";

export const headerColorState = atom({
    key: 'headerColorState',
    default: false,
});
export const sideMenuState = atom({
    key: 'sideMenuState',
    default: false,
});

export const popupState = atom<PopupState>({
    key: 'popupState',
    default: {
        isOpen: false,
        data: null
    },
});
export const modalState = atom<PopupState>({
    key: 'modalState',
    default: {
        isOpen: false,
        data: null
    },
});

export const subscriptionState = atom({
    key: 'subscriptionState',
    default: '',
});

export const subscriptionDataState = atom<OrderProps>({
    key: 'subscriptionDataState',
    default: {cleaning: '', locale: '', py: '', phone: ''},
});
