import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productDescribe: "",
};

export const productDescribeSlice = createSlice({
    name: "describe",
    initialState,
    reducers: {
        addProductDescribe: (state, action) => {
            state.productDescribe = action.payload;
        },
    },
});

export const { addProductDescribe } = productDescribeSlice.actions;

export default productDescribeSlice.reducer;
