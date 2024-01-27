import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        value: {
            cleaning: '',
            locale: '',
            py: '',
            phone: '',
            privacy: false,
        },
    },
    reducers: {
        changeData: (state, data) => {
            if (data.payload.key === 1) {
                state.value.cleaning = data.payload.value;
            } else if (data.payload.key === 2) {
                state.value.locale = data.payload.value;
            } else if (data.payload.key === 3) {
                state.value.py = data.payload.value;
            } else if (data.payload.key === 4) {
                state.value.phone = data.payload.value;
            }
        },
        clearData: (state) => {
            state.value.locale = '';
            state.value.py = '';
            state.value.phone = '';
        },
    },
})

export const {changeData, clearData} = orderSlice.actions

export default orderSlice.reducer
