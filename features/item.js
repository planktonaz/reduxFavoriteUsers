import {createSlice} from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: "item",
    initialState: {
        bgColor: "aqua",
        message: "Defaut text",
    },
    reducers: {
        changeBgColor: (state, action) => {
            state.bgColor = action.payload
        },
        changeMessage: (state, action) => {
            state.message = action.payload
        },
    }
})

export const {changeBgColor, changeMessage} = itemSlice.actions

export default itemSlice.reducer;