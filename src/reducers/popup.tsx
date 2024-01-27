import {createSlice} from "@reduxjs/toolkit";


export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        value: {
            openPopup: false,
            openPopup_depth2: false,
            openModal: false,
            openSideMenu: false,
            page: null,
            page_depth2: null,
            page_Modal: null,
            headerNonWhite: false,
        }
    },
    reducers: {
        togglePopup: (state, pages) => {
            state.value.openPopup = !state.value.openPopup;
            state.value.page = pages.payload;

        },
        toggleModal: (state, pages) => {
            state.value.openModal = !state.value.openModal;
            state.value.page_Modal = pages.payload;
        },
        toggleSideMenu: (state) => {
            state.value.openSideMenu = !state.value.openSideMenu;
        },
        togglePopup_depth2: (state, pages) => {
            state.value.openPopup_depth2 = !state.value.openPopup_depth2;
            state.value.page_depth2 = pages.payload;
        },
        setHeaderBg: (state) => {
            state.value.headerNonWhite = !state.value.headerNonWhite;
        },
    },
})

export const {togglePopup, toggleModal, toggleSideMenu, togglePopup_depth2, setHeaderBg} = popupSlice.actions

export default popupSlice.reducer
