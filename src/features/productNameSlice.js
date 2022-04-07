import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productName: "",
};

export const productNameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        addProductName: (state, action) => {
            state.productName = action.payload;
        },
    },
});

export const { addProductName } = productNameSlice.actions;

export default productNameSlice.reducer;
