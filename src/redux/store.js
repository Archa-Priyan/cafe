import { configureStore } from "@reduxjs/toolkit";
import cafeSlice from "./cafeSlice";



const store = configureStore({
    reducer:{
        cafeSlice

    }
})

export default store