import {configureStore} from '@reduxjs/toolkit'
import popup from "./popup";
import order from "./order";
import portfolio from "./portfolio";

export default configureStore({
    reducer: {
        popup: popup,
        order: order,
        pot: portfolio
    },
})
