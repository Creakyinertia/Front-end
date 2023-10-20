import reducer from "./reducers";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import cartSlice from "./cartSlice";
import hreducer from "./reducers";

// const store = createStore(reducer) 
const store=configureStore({
    reducer:{
        products: ProductsSlice,
        cart:cartSlice,
        reducer:hreducer
    }
})
export default store