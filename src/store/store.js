import { configureStore } from "@reduxjs/toolkit";
import { actionsSlice } from "./actions/actions";

export const store = configureStore({
    reducer:{
        spotify: actionsSlice.reducer

    }
})