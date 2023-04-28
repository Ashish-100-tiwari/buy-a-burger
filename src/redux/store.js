import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
    },

});

export default store;
export const server="https://burger-app-so8b.onrender.com/api/v1";