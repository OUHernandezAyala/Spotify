import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    number: 0
}

export const actionsSlice = createSlice({

    name: 'actions',
    initialState,
    reducers:{
        randomNumber: (state)=>{
            state.number = Math.floor(Math.random())
        }

    }
})

export const {randomNumber} = actionsSlice.actions