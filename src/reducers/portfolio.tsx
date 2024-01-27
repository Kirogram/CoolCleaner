import {createSlice} from "@reduxjs/toolkit";

export const potSlice = createSlice({
    name: 'pot',
    initialState: {
        value: {
            data: [],
            pfSeq: '',
            detailData: {},

        },
    },
    reducers: {
        setData: (state, data) => {
            state.value.data = data.payload;
        },
        setPF: (state, data) => {
            state.value.pfSeq = data.payload;
        },
        setDetailData: (state, data) => {
            state.value.detailData = data.payload;
        },
    },
})

export const {setData, setPF, setDetailData} = potSlice.actions

export default potSlice.reducer
